import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gfxcursions.app',
  appName: 'gfX_whatsGood',
  webDir: 'dist',
  server: {
    url: 'https://sociable-trip-crew-go.base44.app/?v=2',
    androidScheme: 'https',
  },

    plugins: {
    SplashScreen: {
      launchShowDuration: 3000,  // 3 seconds so you can clearly see it
      showSpinner: false,
      backgroundColor: "#000000"
    }
  }
};

export default config;
