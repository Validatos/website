import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "npm:@twind/core@1.1.3";
// twind preset
import presetTailWind from "npm:@twind/preset-tailwind@1.1.4/base";
import * as colors from "npm:@twind/preset-tailwind@1.1.4/colors";
import presetAutoPrefix from "npm:@twind/preset-autoprefix@1.0.7";

/** @todo Remove the need for type-assertions */
export default {
  selfURL: import.meta.url,
  // <BaseTheme, Preset<any>[]>
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
          // Modify primary and secondary colors according to your color-scheme
          primary: "#be185d",
          secondary: "#4338ca",
          mygray: "#637381",
        },
        // deno-lint-ignore no-explicit-any
      }) as Preset<any>,
    ],
  }),
} as Options;
