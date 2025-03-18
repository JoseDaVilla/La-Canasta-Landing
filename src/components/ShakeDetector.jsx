import { useState, useEffect } from 'react'

const ShakeDetector = () => {
    const [showEggs, setShowEggs] = useState(false)
    const [eggPositions, setEggPositions] = useState([])
    const [isSupported, setIsSupported] = useState(false)

    // Check if DeviceMotionEvent is supported
    useEffect(() => {
        if (window.DeviceMotionEvent) {
            setIsSupported(true)
        }
    }, [])

    // Handle device motion detection
    useEffect(() => {
        if (!isSupported) return

        let lastX = 0
        let lastY = 0
        let lastZ = 0
        let lastTime = new Date().getTime()
        const SHAKE_THRESHOLD = 800 // Adjust sensitivity
        const SHAKE_TIMEOUT = 1000 // Cooldown between shakes
        let lastShake = 0

        const handleMotion = (event) => {
            const current = new Date().getTime()
            const timeDiff = current - lastTime

            if (timeDiff > 100) {
                const acceleration = event.accelerationIncludingGravity
                if (!acceleration) return

                const diffTime = current - lastTime
                lastTime = current

                const { x, y, z } = acceleration
                const speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000

                if (speed > SHAKE_THRESHOLD && current - lastShake > SHAKE_TIMEOUT) {
                    createEggRain()
                    lastShake = current
                }

                lastX = x
                lastY = y
                lastZ = z
            }
        }

        // Generate random positions for eggs
        const createEggRain = () => {
            setShowEggs(true)
            const windowWidth = window.innerWidth
            const newEggs = []

            for (let i = 0; i < 20; i++) {
                newEggs.push({
                    id: `egg-${Date.now()}-${i}`,
                    left: Math.random() * windowWidth,
                    delay: Math.random() * 2,
                    size: Math.random() * 1.5 + 1, // Size between 1 and 2.5rem
                    duration: Math.random() * 3 + 4, // Fall duration between 4 and 7 seconds
                })
            }

            setEggPositions(newEggs)

            // Clear eggs after animation
            setTimeout(() => {
                setShowEggs(false)
            }, 7000)
        }

        window.addEventListener('devicemotion', handleMotion)

        return () => {
            window.removeEventListener('devicemotion', handleMotion)
        }
    }, [isSupported])

    // Exit if not supported
    if (!isSupported) return null

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
                            }}
                        >
                            🥚
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default ShakeDetector
