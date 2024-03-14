import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mypwa.test',
  appName: 'MyPWAApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
