import base44 from "@base44/vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "./",   // REQUIRED for Capacitor (file:// support)
  logLevel: "error",

  define: {
    "import.meta.env.VITE_BASE44_APP_BASE_URL":
      JSON.stringify("https://sociable-trip-crew-go.base44.app"),
  },

  plugins: [
    base44({
      legacySDKImports: false,
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true,
    }),
    react(),
  ],

  build: {
    sourcemap: true,
  },
})
