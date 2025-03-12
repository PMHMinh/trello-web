import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'

  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500], // Màu chính (teal)
          light: teal[300], // Màu nhạt hơn
          dark: teal[700], // Màu đậm hơn
          contrastText: '#fff' // Màu chữ phù hợp với nền primary
        },
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
  // ...other properties
})

export default theme
// Theme là mặc định của MUI với các thông số có sẵn
// extendTheme Dùng để mở rộng và tùy chỉnh theme mặc định của MUI
// https://v5.mui.com/material-ui/experimental-api/css-theme-variables/migration/

// https://mui.com/material-ui/customization/theming/ link sử dụng Theme
