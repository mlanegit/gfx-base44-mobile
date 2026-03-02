import base44 from "@base44/vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(() => {
  // ✅ Ensure Base44 plugin sees this at build time (Node env)
  process.env.VITE_BASE44_APP_BASE_URL = "https://sociable-trip-crew-go.base44.app"

  return {
    base: "./", // REQUIRED for Capacitor
    logLevel: "error",
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
  }
})
