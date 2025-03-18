/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f5f9e8',
                    100: '#eaf3c6',
                    200: '#dbe891',
                    300: '#c8d858',
                    400: '#b4c32e',
                    500: '#8d9a20', // Main brand color
                    600: '#697418',
                    700: '#515816',
                    800: '#3c4111',
                    900: '#2a2e0c',
                },
                earth: {
                    50: '#f9f6f0',
                    100: '#f1e9d9',
                    200: '#e4d5b3',
                    300: '#d4bb84',
                    400: '#c4a158',
                    500: '#a78240',
                    600: '#8b6b37',
                    700: '#6b532c',
                    800: '#4d3c21',
                    900: '#302616',
                },
                farm: {
                    beige: '#d0ae6e',
                    cafeClaro: '#bb6d38',
                    cafeOscuro: '#874825',
                    50: '#f9f6f0',
                    100: '#f1ebdd',
                    200: '#e4d5b7',
                    300: '#d0ae6e', // beige claro
                    400: '#c28e53',
                    500: '#bb6d38', // café intermedio
                    600: '#a55a33',
                    700: '#874825', // café oscuro
                    800: '#6b3a20',
                    900: '#4f2c19',
                },
            },
            fontFamily: {
                sans: ['"Questrial"', 'sans-serif'],
                display: ['"Bebas Neue"', 'Impact', 'sans-serif'], // Changed to a font with natural boldness
                handwriting: ['"Satisfy"', 'cursive'],
            },
            fontWeight: {
                'extra-bold': 400, // Add this to have an extra bold option
            },
            textShadow: {
                'bold': '0.3px 0 0 currentColor', // This helps text appear bolder
            },
            backgroundImage: {
                'farm-pattern': "url('/fondo.webp')",
            }
        },
    },
    plugins: [],
}
