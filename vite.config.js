import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 配置代理（解决跨域问题）
  server: {
    proxy: {
      '/api': { // 获取路径中包含了/api的请求
        target: 'http://localhost:8080',  // 后台服务所在的源
        changeOrigin: true, // 是否要修改源
        logLevel: 'debug',
        rewrite: (path) => path.replace(/^\/api/, '') // /api替换为''(空字符串)
      }
    }
  }
})
