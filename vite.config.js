import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "public/index.html"), // Ensure this path is correct
            },
        },
    },
});
