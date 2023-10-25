import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "@twind/core";
import presetTailWind from "@twind/preset-tailwind/base";
import * as colors from "@twind/preset-tailwind/colors";
import presetAutoPrefix from "@twind/preset-autoprefix";

export default {
  selfURL: import.meta.url,
  ...defineConfig({
    theme: {
      container: {
        padding: {
          DEFAULT: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "991px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      screens: {
        sm: "580px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    presets: [
      presetAutoPrefix(),
      presetTailWind({
        colors: {
          // This line is required. Otherwise, if removed, the values of other colors with be removed.
          ...colors,
          primary: "#be185d",
          secondary: "#4338ca",
          mygray: "#637381",
        },
        // deno-lint-ignore no-explicit-any
      }) as Preset<any>,
    ],
  }),
} as Options;
