/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: '2.25rem',
                            fontWeight: '700',
                            marginBottom: '1.5rem'
                        }
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
