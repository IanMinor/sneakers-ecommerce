// tailwind.config.js
import { heroui } from "@heroui/react";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
