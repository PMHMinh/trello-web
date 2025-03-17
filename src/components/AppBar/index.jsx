import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Typography } from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
function AppBar() {
  const [searchValue, setsearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      {/* Box Bên Trái  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} fontSize='small' inheritViewBox sx={{ color: 'white' }} />
          <Typography component='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
        </Box>

        {/* Menu  */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />

          {/* Button  */}
          <Button
            sx={{
              color: 'white'
            }}
            startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>

      {/* Box Bên Phải  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                // Nếu giá trị setsearchValue không có sẽ transparent còn nếu có hiện icon là white
                onClick={() => setsearchValue('')}
              // Bấm vào icon chạy hàm onClick set lại giá trị setsearchValue về rỗng
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              // Set bordercolor cho Input Search...
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          id="outlined-search"
          label="Search..."
          value={searchValue} // Khai báo ở trên là rỗng
          onChange={(e) => setsearchValue(e.target.value)}
          // Khi gõ sẽ vào Input chạy hàm onChange và sẽ lấy targer.value,
          // set vào setsearchValue và cập nhật searchValue
          type="text"
          size='small' // Set ô Input = small
        />
        <ModeSelect />

        {/* Thông báo= Badge -  hover=Tooltip */}
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" >
          <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box >
  )
}

export default AppBar
