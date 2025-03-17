import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
// Xuất cấu hình mặc định của Vite

export default defineConfig({
  plugins:
  [react(), // Plugin React cho Vite dùng SWC thay Babel, giúp tăng tốc biên dịch React.
    svgr()], // Dùng plugin svgr để import file SVG như một React Component
  // base: './'
  resolve: {
    alias: [
      { find: '~', replacement: '/src' } // Thiết lập alias đường dẫn
    ]
  }
})