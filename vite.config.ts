import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [devtools(), tanstackRouter({ target: "react", autoCodeSplitting: true }), viteReact()],
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [fileURLToPath(new URL("./src/styles", import.meta.url))],
			},
		},
	},
});

export default config;
