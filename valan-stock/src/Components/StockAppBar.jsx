import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import bg from './assets/DP.jpg'
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


export default function StockAppBar(user) {
  return (
    <AppBar position="sticky" >
      <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box whiteSpace={2} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
          <Typography variant="h6" color="inherit" component="div" sx={{ display: { xs: 'none', md: 'flex' }}}>
            {user.user.name} Stock Dashboard
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" sx={{display: { md: 'none' } }}>
          <MenuIcon  />
          </IconButton>
        </Box>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Avatar alt="Remy Sharp" src={bg} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}