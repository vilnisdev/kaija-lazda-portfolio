/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brutalist-red': '#B22222',
                'off-white-warm': '#FAF9F6',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            // If "Fragrance" theme was meant to be a nested object, Tailwind doesn't support that directly under extend for colors roughly.
            // I will add them directly as requested keys 'brutalist-red' and 'off-white-warm'.
        },
    },
    plugins: [],
}
