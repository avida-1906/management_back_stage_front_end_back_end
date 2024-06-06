import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8081',//注意这里不能用http://localhost:8889
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace('/^\/api/', '')
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
      'virtual-select-plugin': 'virtual-select-plugin/src/virtual-select',
    }
  }
})
