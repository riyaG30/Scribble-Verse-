import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Set the root directory to 'public'
    base: "",
    build: {
        outDir: "../dist", // Output directory
        rollupOptions: {
            input: "public/index.html", // Specify the input HTML file
        },
    },
});
