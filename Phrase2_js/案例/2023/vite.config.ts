import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true
      })
    ],
    base: env.VITE_BASE,
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
          // 'puzzle': path.resolve(__dirname, 'puzzle.html'),
          wish: path.resolve(__dirname, 'wish.html')
        }
      }
    }
  })
}
