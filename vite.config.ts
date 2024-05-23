import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';
var fs = require('fs');

export default defineConfig({
  plugins: [babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }), react({ fastRefresh: false })],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
        host: 'tg-mini-app.local',
        port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },
  },
})