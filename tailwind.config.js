/** @type {import('tailwindcss').config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#de2c4d",
                secondary: "#fb923c",
            },

            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                averia: ["Averia Serif Libre", "serif"]
            },

            container: {
                center: true,
            }
        },
    },
    plugins: [],
}