import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
	plugins: [
		vue(),
		Components({
			dts: true,
			resolvers: [PrimeVueResolver()],
		}),
		AutoImport({
			dts: true,
			dirs: ["./src/composables"],
			include: [/\.[tj]sx?$/, /\.vue$/],
			imports: ["vue", "vue-router", "pinia"],
			vueTemplate: true,
		}),
	],
});
