/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    "primary-pale": `hsl(225, 100%, 94%)`,
                    "primary-bright": `hsl(245, 75%, 52%)`,
                    "neutral-pale": `hsl(225, 100%, 98%)`,
                    "neutral-unsaturated": "hsl(224, 23%, 55%)",
                    "neutral-dark": "hsl(223, 47%, 23%)",
                },
            },
        },
    },
    plugins: [],
};
