import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [tailwindcss() as any],
  }),
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  runner: {
    binaries: {
      firefox: 'firefoxdeveloperedition',
    },
  },
});
