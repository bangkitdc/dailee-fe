/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-01": "#F3DC98",
        "yellow-02": "#F6E6B6",
        "yellow-03": "#F6EDCF",

        "orange-01": "#EFAA56",
        "orange-02": "#F5BD69",
        "orange-03": "#FFDFAE",

        "green-01": "#3F905B",
        "green-02": "#62B27E",
        "green-03": "#6CB686",
        "green-04": "#CEE7CF",

        "blue-01": "#779DE7",
        "blue-02": "#8CA9E3",
        "blue-03": "#EBF3FF",

        "purple-01": "#BE58C0",
        "purple-02": "#FFEDF8",

        "brown-01": "#573926",
        "brown-02": "#785226",

        "cream-01": "#FFFBE7",

        "shade-03": "#AEAEAE",

        "white-01": "#FFFFFF",
        "white-02": "#F6F6F6",

        "black-01": "#000000",

        "neutral-700": "#1F1F1F",
        "neutral-600": "#545454",
        "neutral-500": "#A2A2A2",
        "neutral-400": "#CACACA",
        "neutral-300": "#E1E1E1",
        "neutral-200": "#EEEEEE",
        "neutral-100": "#F5F5F5",
        "neutral-50": "#FAFAFA",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        assessment: "url('/icons/bg-assessment.svg')",
        "artikel-1": "url('/icons/bg-artikel-1.svg')",
        "artikel-2": "url('/icons/bg-artikel-2.svg')",
        "artikel-3": "url('/icons/bg-artikel-3.svg')",
        "students-module":
          "url('/icons/bg-students-module.svg'), linear-gradient(to bottom, rgba(246, 237, 207, 0.5), rgba(243, 220, 152, 0.75))",
      },
      boxShadow: {
        input: "0 0 0 1px #E3E5E5",
        "input-focus": "0 0 0 1.5px #A2A2A2",
        "input-error": "0 0 0 1px #f15e6c",
        "input-focus-error": "0 0 0 1.5px #f15e6c",
      },
    },
  },
  plugins: [],
};

