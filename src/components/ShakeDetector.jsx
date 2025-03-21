import { useState, useEffect } from 'react'

const ShakeDetector = () => {
    const [showEggs, setShowEggs] = useState(false)
    const [eggPositions, setEggPositions] = useState([])
    const [isSupported, setIsSupported] = useState(false)
    const [permissionGranted, setPermissionGranted] = useState(false)

    // Add CSS styles to head for the falling eggs animation
    useEffect(() => {
        // Create a style element
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            @keyframes customFall {
                0% {
                    transform: translateY(-50px) rotate(0deg);
                    opacity: 1;
                }
                75% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(calc(100vh + 50px)) rotate(360deg);
                    opacity: 0;
                }
            }
            
            .animate-fall {
                animation: customFall 5s ease-in forwards;
            }
            
            .white-egg {
                filter: brightness(1.5) saturate(0) contrast(1.2);
                color: white;
                text-shadow: 0 0 2px rgba(0,0,0,0.1);
            }
        `;
        
        // Append style to head
        document.head.appendChild(styleElement);
        
        // Cleanup function to remove style when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    // Check if DeviceMotionEvent is supported and handle iOS permissions
    useEffect(() => {
        // Function to request permission on iOS 13+
        const requestIOSPermission = async () => {
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                try {
                    // iOS 13+ requires permission request
                    const permission = await DeviceMotionEvent.requestPermission();
                    if (permission === 'granted') {
                        setPermissionGranted(true);
                        setIsSupported(true);
                    } else {
                        console.log('Motion permission denied');
                    }
                } catch (error) {
                    console.error('Error requesting motion permission:', error);
                }
            } else {
                // Non-iOS devices or older iOS versions don't need permission
                setPermissionGranted(true);
                setIsSupported(true);
            }
        };

        if (window.DeviceMotionEvent) {
            // Check if we need to request permission (iOS 13+)
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                // Create a button for user interaction
                const permissionButton = document.createElement('button');
                permissionButton.innerText = '🥚 Activar animación de huevos';
                permissionButton.className = 'fixed bottom-4 left-4 z-50 bg-farm-cafeClaro text-white px-4 py-2 rounded-full shadow-lg text-sm';
                permissionButton.onclick = async () => {
                    await requestIOSPermission();
                    permissionButton.remove();
                };
                document.body.appendChild(permissionButton);
            } else {
                // For non-iOS devices
                setPermissionGranted(true);
                setIsSupported(true);
            }
        }
    }, []);

    // Handle device motion detection
    useEffect(() => {
        if (!isSupported || !permissionGranted) return;

        let lastX = 0;
        let lastY = 0;
        let lastZ = 0;
        let lastTime = new Date().getTime();
        const SHAKE_THRESHOLD = 800; // Adjust sensitivity
        const SHAKE_TIMEOUT = 1000; // Cooldown between shakes
        let lastShake = 0;

        const handleMotion = (event) => {
            const current = new Date().getTime();
            const timeDiff = current - lastTime;

            if (timeDiff > 100) {
                const acceleration = event.accelerationIncludingGravity;
                if (!acceleration || acceleration.x === null) return;

                const diffTime = current - lastTime;
                lastTime = current;

                const { x, y, z } = acceleration;
                const speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;

                if (speed > SHAKE_THRESHOLD && current - lastShake > SHAKE_TIMEOUT) {
                    createEggRain();
                    lastShake = current;
                }

                lastX = x;
                lastY = y;
                lastZ = z;
            }
        };

        // Generate random positions for eggs
        const createEggRain = () => {
            setShowEggs(true);
            const windowWidth = window.innerWidth;
            const newEggs = [];

            for (let i = 0; i < 20; i++) {
                newEggs.push({
                    id: `egg-${Date.now()}-${i}`,
                    left: Math.random() * windowWidth,
                    delay: Math.random() * 2,
                    size: Math.random() * 1.5 + 1, // Size between 1 and 2.5rem
                    duration: Math.random() * 3 + 4, // Fall duration between 4 and 7 seconds
                    rotation: Math.random() * 360, // Random initial rotation
                });
            }

            setEggPositions(newEggs);

            // Clear eggs after animation
            setTimeout(() => {
                setShowEggs(false);
            }, 7000);
        };

        window.addEventListener('devicemotion', handleMotion);

        // Add manual trigger button
        const triggerButton = document.createElement('button');
        triggerButton.innerText = '🥚';
        triggerButton.title = 'Crear lluvia de huevos';
        triggerButton.className = 'fixed bottom-4 right-4 z-50 bg-farm-cafeClaro text-white w-12 h-12 rounded-full shadow-lg text-xl flex items-center justify-center';
        triggerButton.onclick = createEggRain;
        document.body.appendChild(triggerButton);

        return () => {
            window.removeEventListener('devicemotion', handleMotion);
            if (triggerButton.parentNode) {
                triggerButton.parentNode.removeChild(triggerButton);
            }
        };
    }, [isSupported, permissionGranted]);

    return (
        <>
            {showEggs && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {eggPositions.map((egg) => (
                        <div
                            key={egg.id}
                            className="absolute animate-fall"
                            style={{
                                left: `${egg.left}px`,
                                top: '-50px',
                                animationDelay: `${egg.delay}s`,
                                animationDuration: `${egg.duration}s`,
                                fontSize: `${egg.size}rem`,
                                opacity: 0.9,
                                transform: `rotate(${egg.rotation}deg)`,
                            }}
                        >
                            {/* White egg emoji with filter to make it white */}
                            <div className="white-egg" aria-hidden="true">
                                🥚
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ShakeDetector;
