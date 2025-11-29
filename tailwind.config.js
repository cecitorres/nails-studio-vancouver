/** @type {import('tailwindcss').Config} */
module.exports = {
  // Keep the content array to scan your files
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // The 'theme' object is completely removed
  // Theme customization now happens in CSS using @theme
  plugins: [],
}