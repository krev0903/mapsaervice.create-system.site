import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    base: '/mapsaervice.create-system.site/posting-map-test/build/assets',
    build: {
        outDir: 'public/build/assets',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
});
