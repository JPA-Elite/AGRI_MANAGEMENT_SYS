import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 99999999999,
        // manifest: true,
        // outDir: 'public/build',
        // rollupOptions: {
        //     input: 'resources/js/app.jsx',
        // },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            // publicPath: 'https://agri-management-sys-941081a104e0.herokuapp.com/build/',
        }),
        react(),
    ],
});
