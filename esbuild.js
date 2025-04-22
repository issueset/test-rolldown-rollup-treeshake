import { build } from "esbuild";

build({
  entryPoints: ["src/main.js"],
  bundle: true,
  treeShaking: true,
  minify: true,
  outdir: "dist/output_esbuild",
});
