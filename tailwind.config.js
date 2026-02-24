/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'work-black': ['WorkSan-Black', 'sans-serif'],
        'work-bold': ['WorkSan-Light', 'sans-serif'],
        'work-medium': ['WorkSan-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}