import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [
react(),
tsconfigPaths(),
eslintPlugin(),
checker({ typescript: true })
],
server: {
open: true
}
});