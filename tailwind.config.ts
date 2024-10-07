import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                foreground: '#0f172a', // Slate 900
                background: '#ffffff',
                primary: '#a855f7', // Purple 500
            },
        },
    },
    plugins: [],
}

export default config
