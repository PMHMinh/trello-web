
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setMode(event.target.value) Sử dụng 1 trong 2 cách setMode

  }

  return (
    <FormControl sx={{ minWidth: '120px' }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color: 'white', // Chữ màu trắng
          '&.Mui-focused': { color: 'white' } //Bấm vào Input ,Mode vẫn màu trắng
        }}>
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        // mode là sẽ ăn theo giá trị Dark hoặc Light khi bấm
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          //Tùy chỉnh viền của InputLabel
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          //Tùy chỉnh khi hover của InputLabel
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          //Tùy chỉnh khi bấm vào InputLabel
          '.MuiSvgIcon-root': { color: 'white' }
          //Tùy chỉnh màu Light - Dark của Icon

        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon></LightModeIcon>Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon></DarkModeIcon>Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect