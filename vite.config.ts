import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }), react({ fastRefresh: false })],
})