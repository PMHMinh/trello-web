// BoardBar sử dụng ở 1 nơi cụ thể  khác với AppBar
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  // Từ Chip đi vào icon={<DashboardIcon />} phía trong để tùy chỉnh
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      {/* Box Bên Trái  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="LeMinh" clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public" clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Google" clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation" clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters" clickable
        />
      </Box>


      {/* Box Bên Phải  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Button Invite */}
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >

          Invite
        </Button>

        {/* max 4 là số lượng ô Avatar hiển thị*/}
        <AvatarGroup
          max={4}
          sx={{
            // Áp dụng cho toàn bộ Avatar phía dưới
            gap: '8px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
          <Tooltip title='leminh'>
            <Avatar
              src="https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg"
              alt="leminh" />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar