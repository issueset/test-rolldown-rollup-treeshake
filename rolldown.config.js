import { defineConfig } from "rolldown";

export default defineConfig({
  input: ["src/main.js"],
  treeshake: true,
  output: {
    dir: "dist/output_rolldown",
  },
});
