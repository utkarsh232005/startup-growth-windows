import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Use Babel instead of SWC for better cross-platform compatibility
      babel: {
        plugins: []
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // Skip platform-specific optimizations 
    exclude: ['rollup']
  },
  build: {
    // Ensure compatibility with different environments (Windows and Linux)
    rollupOptions: {
      // Avoid using native dependencies
      treeshake: {
        moduleSideEffects: false
      }
    }
  },
}));
