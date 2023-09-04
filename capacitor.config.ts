import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Book Your Meal',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
