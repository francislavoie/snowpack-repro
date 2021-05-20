module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#F8F9F9",
          100: "#ECEDEF",
          200: "#DEE0E3",
          300: "#C2C6CC",
          400: "#A6ACB5",
          500: "#8A929E",
          600: "#616D79",
          700: "#4A545D",
          800: "#374048",
          900: "#15181C",
        },

        blue: {
          50: "#F5F9FD",
          100: "#E7F3FF",
          200: "#B4D9FF",
          300: "#67B2FF",
          400: "#1A8CFF",
          500: "#0066CC",
          600: "#004C99",
          700: "#003366",
          800: "#001A34",
          900: "#000102",
        },

        cyan: {
          50: "#F8FEFE",
          100: "#EFFCFC",
          200: "#CDF5F5",
          300: "#A3EDED",
          400: "#78E5E5",
          500: "#00C7C7",
          600: "#00AEAE",
          700: "#009494",
          800: "#007B7B",
          900: "#004848",
        },

        indigo: {
          50: "#F8F8FF",
          100: "#E1E1FD",
          200: "#C9C9FB",
          300: "#9A9AF7",
          400: "#6B6BF4",
          500: "#1010CF",
          600: "#0C0CA0",
          700: "#080871",
          800: "#050541",
          900: "#010112",
        },

        green: {
          50: "#F9FDF4",
          100: "#ECF9DF",
          200: "#D3F1B4",
          300: "#BAE98A",
          400: "#93DD4A",
          500: "#66CC00",
          600: "#4D9900",
          700: "#336600",
          800: "#264D00",
          900: "#1A3300",
        },

        teal: {
          50: "#FCFEFD",
          100: "#DEF4F0",
          200: "#B8E7DF",
          300: "#7FD4C5",
          400: "#3FBEA9",
          500: "#2B8173",
          600: "#256E62",
          700: "#1E5B51",
          800: "#184840",
          900: "#0B221E",
        },

        red: {
          50: "#FDF6F4",
          100: "#FAE5DE",
          200: "#F1BCAB",
          300: "#E9987C",
          400: "#E27550",
          500: "#DB5224",
          600: "#C54A20",
          700: "#993A19",
          800: "#6D2911",
          900: "#41180A",
        },

        voilet: {
          50: "#F3EAFB",
          100: "#E0CBF5",
          200: "#C7A0ED",
          300: "#AE75E5",
          400: "#8835D9",
          500: "#5600AD",
          600: "#490094",
          700: "#3C007B",
          800: "#300062",
          900: "#240047",
        },

        amber: {
          50: "#FFFBF4",
          100: "#FFF1DA",
          200: "#FFE8C3",
          300: "#FFD48D",
          400: "#FFC15A",
          500: "#FFA40D",
          600: "#D98700",
          700: "#A66700",
          800: "#805207",
          900: "#503304",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};