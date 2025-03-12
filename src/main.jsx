import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import MUI vào sử dụng
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'
// CssBaseline nhất quán Css giữa các trình duyệt
// ThemeProvider bọc bên ngoài (ứng dụng App) để CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {/* CssBaseLine giúp reset CSS mặc định trên trình duyệt, tạo nền tảng đồng nhất cho UI */}
      <App />
      {/* App là ứng dụng chính  */}
    </CssVarsProvider>
    {/* CssVarsProvider Giúp bạn dễ dàng tùy chỉnh màu sắc, font chữ, khoảng cách...dựa trên chủ đề (theme) */}
  </React.StrictMode>
)
