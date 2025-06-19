import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Person3Icon from '@mui/icons-material/Person3';

import StockAppBar from '../StockAppBar';
import Userdetails from './Userdetails';
import Portfolio from './Portfolio';

const SIDEBAR_WIDTH = 230;
const SIDEBAR_FULL_WIDTH = 280;

const CustomSidebar = styled(Box)(({ open }) => ({
  width: SIDEBAR_FULL_WIDTH,
  height: '100vh',
  backgroundColor: 'yellowgreen',
  position: 'fixed',
  top: 0,
  left: open ? 0 : -SIDEBAR_WIDTH,
  transition: 'left 0.3s ease',
  paddingTop: '60px', // Adjust if you have an AppBar
  overflowY: 'auto',
}));

function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);

  const fetchUserProfile = async () => {
    const response = await axios.get('http://localhost:8080/api/userProfile', {
      withCredentials: true,
    });
    if (!response.data.success) throw new Error('Failed to load profile');
    return response.data.data.data;
  };

  const { data: userData, isLoading, isError, error } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });

  if (isLoading) return <div className="text-center mt-10"><CircularProgress /></div>;
  if (isError) return <div className="text-center mt-10 text-red-600">Error: {error.message}</div>;

  return (
    <>
      <StockAppBar user={userData} />

      {/* Sidebar */}
      <CustomSidebar open={open}>
        <Typography variant="h6" component="p" ml={2} mt={1}>Sidebar</Typography>
        <IconButton
          onClick={toggleSidebar}
          sx={{ position: 'absolute', top: 60, right: 2, color: 'inherit' }}
        >
          {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
        </IconButton>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><InsertChartIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><Person3Icon /></ListItemIcon>
              <ListItemText primary="User details" />
            </ListItemButton>
          </ListItem>
        </List>
      </CustomSidebar>

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: open ? `${SIDEBAR_FULL_WIDTH}px` : '45px',
          transition: 'margin-left 0.5s ease',
          padding: 2,
        }}
      >
        <Userdetails user={userData}/>
        <Portfolio/>
      </Box>
    </>
  );
}

export default Dashboard;
