/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'delete': "rgba(255,0,0,0.21)",
        'form-background': '#111',
        'form-border': '#2b2b2b',
        'form-background-focus': '#1a1a1a',
        'form-border-focus': '#444'
      }
    },
  },
  plugins: [],
}

