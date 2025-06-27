import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'subtle-color': '#a0a0a0', // Une couleur discrète
        'main-color': '#007bff',   // Une couleur principale
        'soft-blue': '#ADC0D2',    // Couleur soft blue
        'secondary': '#637586',    // Couleur secondary
        'subtle': '#728AA1',       // Couleur subtle
      },
    },
  },
  plugins: [],
};

export default config;