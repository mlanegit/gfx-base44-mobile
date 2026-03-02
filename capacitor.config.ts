import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gfxcursions.app',
  appName: 'gfX_whatsGood',
  webDir: 'dist',
  server: {
    url: 'https://sociable-trip-crew-go.base44.app',
    androidScheme: 'https',
  },
};

export default config;
