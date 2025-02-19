import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-lp/', // ★ GitHub Pages のリポジトリ名を指定！
  plugins: [react()],
});
