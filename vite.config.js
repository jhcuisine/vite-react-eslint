import react from '@vitejs/plugin-react-swc'; // Import the React plugin for Vite with SWC support
import path from 'path'; // Node.js path module for resolving directory paths
import { defineConfig } from 'vite'; // Import the defineConfig function to create a Vite configuration object

// Vite configuration documentation: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Apply the React plugin to handle React components

  // Base URL for deploying the app. Useful if the app is served from a subdirectory (e.g., when hosted on GitHub Pages).
  base: 'bangladesh',

  // Resolve configuration for module aliasing, allowing for cleaner imports
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Alias for importing components
      '@assets': path.resolve(__dirname, 'src/assets'), // Alias for importing static assets like images or fonts
      '@utils': path.resolve(__dirname, 'src/utils'), // Alias for utility functions or helper methods
      '@styles': path.resolve(__dirname, 'src/styles'), // Alias for styles
    },
  },

  // Development server configuration
  server: {
    port: 3000, // Set a custom port for the development server
    open: true, // Automatically open the browser when the server starts
    strictPort: true, // Fail the server start if the specified port is already in use
    cors: true, // Enable Cross-Origin Resource Sharing for all routes
    hmr: {
      // Hot Module Replacement (HMR) options for live reloading during development
      protocol: 'ws', // Use WebSocket protocol for HMR
      host: 'localhost', // Specify the host for HMR connections
      port: 3000, // Specify the port for HMR
    },
    proxy: {
      // Configure a proxy to redirect API calls to a different backend server
      '/api': {
        target: 'https://api.example.com', // Target API server
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: false, // Set to true if the target server uses HTTPS
      },
    },
    watch: {
      // Watch options to configure file watching behavior
      usePolling: true, // Use polling instead of native file watching
      interval: 100, // Set the polling interval in milliseconds
    },
    // Additional options for the server can be added here
  },

  // CSS preprocessor configuration for handling styles
  css: {
    transformer: 'lightningcss', // Use LightningCSS for CSS transformation
    preprocessorOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler', // Choose the SCSS compiler API
            additionalData: ` // Auto-import common SCSS files
              @import "@/styles/_variables.scss"; // Auto-import SCSS variables
              @import "@/styles/_mixins.scss";    // Auto-import SCSS mixins
              @import "@/styles/_functions.scss";  // Auto-import SCSS functions
              @import "@/styles/_global.scss";     // Auto-import global styles
            `,
            includePaths: [path.resolve(__dirname, 'src/styles')], // Shorten your imports for cleaner code
            outputStyle: 'compressed', // Output CSS in a compact form
            sourceMap: true, // Enable source maps for debugging styles
            precision: 5, // Set precision for calculations (e.g., rem)
            quiet: false, // Show warnings during compilation for easier debugging
            module: {
              scopeBehaviour: 'local', // Enable CSS modules for component-level styles
            },
          },
        },
      },
      sass: {
        api: 'modern-compiler', // Use the modern compiler for Sass
      },
      less: {}, // Placeholder for Less configuration (add if using Less)
      styl: {}, // Placeholder for Stylus configuration (add if using Stylus)
    },
  },

  // Build configuration for optimizing the output of the production build
  build: {
    target: 'esnext', // Specify the JavaScript target version for the build
    outDir: 'dist', // Output directory for the build files
    assetsDir: 'assets', // Directory to nest generated assets under (e.g., images)
    sourcemap: true, // Enable source maps to assist with debugging in production
    minify: 'terser', // Minification tool used for optimizing the build output
    rollupOptions: {
      // Advanced Rollup options for customizing the build process
      output: {
        manualChunks(id) {
          // Code splitting configuration for better performance
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all vendor dependencies into a separate chunk
          }
        },
      },
    },
  },

  // Optimize dependencies to improve build time and runtime performance
  optimizeDeps: {
    include: ['lodash', 'axios'], // Force pre-bundling of specific libraries for faster startup
    exclude: ['some-large-lib'], // Exclude large libraries from pre-bundling to reduce initial build size
  },
});
