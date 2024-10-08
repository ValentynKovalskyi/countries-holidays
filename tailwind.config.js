/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            height: {
                '85/100': '85%',
            },
        },
    },
    plugins: [],
};
