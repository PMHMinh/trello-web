import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'

  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {
    //       main: teal[500], // Màu chính (teal)
    //       light: teal[300], // Màu nhạt hơn
    //       dark: teal[700], // Màu đậm hơn
    //       contrastText: '#fff' // Màu chữ phù hợp với nền primary
    //     },
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  // StyleOverrides Custom tất cả Components ghi đè lên MUI có sẵn
  components: {
    MuiCssBaseline: {
      styleOverrides: {
      }
    },
    // MuiButton: Ghi đè chữ in hoa mặc định
    // Khi sử dụng bất kỳ Button trong code, nó sẽ tự động áp dụng style này
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Ghi đè chữ thường lên chữ hoa MUI
          textTransform:'none',
          // border của button
          borderWidth: '0.5px',
          '&:hover':{ borderWidth: '2px' }
        }
      }
    },
    // Khi sử dụng bất kỳ ô Input nào trong code, nó sẽ tự động áp dụng style này
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: { fontSize: '0.875rem' }
        // Set màu + font cho chữ trong Label
        // color: theme.palette.primary.main,
      }
    },
    // MuiOutlinedInput là tên dùng để tùy chỉnh ô nhập liệu (TextField với variant="outlined"
    // Khi sử dụng bất kỳ Outline nào trong code, nó sẽ tự động áp dụng style này
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Set border cho toàn bộ
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '2px  !important' },
          // borderColor: 'red !important' // Kiểm tra màu để xem có áp dụng không
          '&.Mui-focused fieldset': { borderWidth: '2px !important'
          }
        }
      }
    }
  }
})

export default theme
// Theme là mặc định của MUI với các thông số có sẵn
// extendTheme Dùng để mở rộng và tùy chỉnh theme mặc định của MUI
// https://v5.mui.com/material-ui/experimental-api/css-theme-variables/migration/

// https://mui.com/material-ui/customization/theming/ link sử dụng Theme
// Theme style overrides => Custom cho Dự án

