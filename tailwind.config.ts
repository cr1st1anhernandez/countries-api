import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        'keppel-light': {
          extend: 'light',
          colors: {
            background: '#eef2ff',
            foreground: '#000',
            primary: {
              50: '#f0fdfc',
              100: '#ccfbf6',
              200: '#99f6ec',
              300: '#5eeadb',
              400: '#2dd4c2',
              500: '#14b8a6',
              600: '#0d9485',
              700: '#0f766b',
              800: '#115e56',
              900: '#134e48',
              DEFAULT: '#14b8a6',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#115e56',
              foreground: '#000',
            },
            focus: '#0d9485',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        'keppel-dark': {
          extend: 'dark',
          colors: {
            background: '#18181b',
            foreground: '#fff',
            primary: {
              50: '#f0fdfc',
              100: '#ccfbf6',
              200: '#99f6ec',
              300: '#5eeadb',
              400: '#2dd4c2',
              500: '#14b8a6',
              600: '#0d9485',
              700: '#0f766b',
              800: '#115e56',
              900: '#134e48',
              DEFAULT: '#14b8a6',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#115e56',
              foreground: '#fff',
            },
            focus: '#0d9485',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '2px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
export default config;
