import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        selected: "#0958d6",
        btnBlue: "#00008b",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        right: "1px 0px 0px 0px rgba(0, 0, 0, 0.1)", // Right shadow
        bottom: "0px 1px 0px 0px rgba(0, 0, 0, 0.1)", // Bottom shadow
      },
      backgroundColor: {
        // image :
      },
      screens: {
        sm: "640px",
      },
    },
  },
  plugins: [],
} satisfies Config;
