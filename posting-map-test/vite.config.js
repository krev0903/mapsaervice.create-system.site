export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    base: '/build/assets/', // ← assetsまで含める！
    build: {
        outDir: '../../public_html/mapsaervice.create-system.site/build/assets',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
});
