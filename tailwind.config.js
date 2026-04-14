module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          accent: '#ff4500', // Example accent for heavy machinery
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        editorial: ['var(--font-playfair)', 'serif'], // For high-end headings
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
      }
    }
  }
}