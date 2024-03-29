/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    keyframes: {
      transitionIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      transitionIn: "transitionIn .25s ease-in",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-vintage-teal": {
          backgroundImage:
            "repeating-linear-gradient(to right, theme(colors.teal[700]), theme(colors.teal[700]) 10px, theme(colors.teal[300]) 10px, theme(colors.teal[300]) 20px)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
