/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RammettoOne: ['RammettoOne'],
        Poppins: ['Poppins'],
        PlusJakartaSans: ['PlusJakartaSans'],
      },
      colors: {
        'cust-orange-light': '#FFF0E8',
        'cust-orange-light-hover': '#FEE8DC',
        'cust-orange-light-active': '#FDD0B6',
        'cust-orange-normal': '#FA6815',
        'cust-orange-normal-hover': '#E15E13',
        'cust-orange-normal-active': '#C85311',
        'cust-orange-dark': '#BC4E10',
        'cust-orange-dark-hover': '#963E0D',
        'cust-orange-dark-active': '#702F09',
        'cust-orange-darker': '#582407',

        'cust-green-light': '#EEFBE7',
        'cust-green-light-hover': '#E5F9DB',
        'cust-green-light-active': '#C9F3B6',
        'cust-green-normal': '#52D812',
        'cust-green-normal-hover': '#4AC210',
        'cust-green-normal-active': '#42AD0E',
        'cust-green-dark': '#3EA20E',
        'cust-green-dark-hover': '#31820B',
        'cust-green-dark-active': '#256108',
        'cust-green-darker': '#1D4C06',

        'cust-black-light': '#E6E6E6',
        'cust-black-light-hover': '#D9D9D9',
        'cust-black-light-active': '#B0B0B0',
        'cust-black-normal': '#000000',
      },
      backgroundImage: {
        'HeroSection': "url('/src/assets/HeroSection.png')",
        'FruitCard': "url('/src/assets/FruitCard.png')",
        'MeatCard': "url('/src/assets/MeatCard.png')",
        'SeafoodCard': "url('/src/assets/SeafoodCard.png')",
        'VegetablesCard': "url('/src/assets/VegetablesCard.png')",
        'Partnership1': "url('/src/assets/Partnership1.png')",
        'Partnership2': "url('/src/assets/Partnership2.png')",
        'Partnership3': "url('/src/assets/Partnership3.png')",
        'PromoBG': "url('/src/assets/PromoBG.png')",
        'PeoplePict': "url('/src/assets/PeoplePict.png')",
        'ProfileHeader': "url('/src/assets/ProfileHeader.png')",
      }
    },
  },
  plugins: [],
}