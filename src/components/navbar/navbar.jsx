import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./navbar.css"
import SoftAiImage from "../../assets/logo_transparent.png"
import SoftAiImageMbl from "../../assets/logo_transparent1.png"
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleAbout = ()=>{
    navigate("/about")
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <img src={SoftAiImageMbl} style={{ width: "80px", marginBottom: '20px' }} alt="SoftAi Logo" />
      <Divider />
      <List>
       <span onClick={handleAbout}>About</span>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
const navigate = useNavigate()
const handleLogoClick = ()=>{
  navigate("/")
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"#1A2C5B"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <img src={SoftAiImage} onClick={handleLogoClick} style={{cursor:"pointer",width:"80px",height:"80px",marginTop:"10px"}}/>
          <Typography
            variant="h5"
            component="div"
            
            sx={{
              flexGrow: 1,
              
              display: {md:'flex'}, // Add this line
              alignItems: {md:'left'}, // Add this line
              justifyContent: {md:'left',xs:"center"}, 
             
            }}
            onClick={handleLogoClick}
          >
             <span style={{cursor:"pointer"}}>Soft Ai</span>
             
           
          </Typography>
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={handleAbout}>About</Button>
         
          </Box>
          
        </Toolbar>
      </AppBar>
      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
