/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{html,js}'],
    extract: {
      wtf: (content) => {
        console.log(content, content.match(/[^<>"'`\s]*/))
        // /[\w-/:]+(?&lt;!:)/g
        return content.match(/[^<>"'`\s]*/)
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
  demo: true,
}
