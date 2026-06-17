import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      minify: 'esbuild' as const,
      cssMinify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            const cleanId = id.replace(/\\/g, '/');
            if (cleanId.includes('node_modules')) {
              if (cleanId.includes('react') || cleanId.includes('react-dom') || cleanId.includes('scheduler')) {
                return 'vendor';
              }
              if (cleanId.includes('motion') || cleanId.includes('framer-motion')) {
                return 'animations';
              }
              if (cleanId.includes('lucide-react')) {
                return 'icons';
              }
              return 'vendor-libs';
            }
            if (
              cleanId.includes('/components/ui/') || 
              cleanId.includes('src/components/ui/') || 
              cleanId.includes('/lib/constants.') || 
              cleanId.includes('src/lib/constants.') || 
              cleanId.includes('/lib/utils.') ||
              cleanId.includes('src/lib/utils.')
            ) {
              return 'shared-core';
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'motion', 'lucide-react'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
