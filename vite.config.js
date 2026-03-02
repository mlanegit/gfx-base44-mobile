import base44 from "@base44/vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  // Load .env, .env.[mode], etc into an object
  const env = loadEnv(mode, process.cwd(), "")

  return {
    base: "./",              // REQUIRED for Capacitor
    logLevel: "error",
    plugins: [
      base44({
        // Use env loaded by Vite (works for .env.production)
        legacySDKImports: env.BASE44_LEGACY_SDK_IMPORTS === "true",
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
