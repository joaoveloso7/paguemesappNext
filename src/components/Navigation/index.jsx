import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import Image from 'next/image';
import logoPic from '../../docs/logo.svg'

const drawerWidth = 280;

function Navigation(props) {
  const { window } = props;
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const Routes = [
    {name:'Dashboard', path:'/', status: 'able'}, 
    {name:'Adicionar conta', path:'AddConta', status: 'able'}, 
    {name:'Contas a pagar', path:'ContasPagar', status: 'able'}, 
    {name:'Contas a receber', path:'ContasReceber', status: 'able'}, 
    {name:'Cofrinho Nubank', path:'Nubank', status: 'disabled'}
  ]


  const drawer = (
    <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <Toolbar  />
      
      <Image
        src={logoPic}
        alt="Picture of the author"
      />

      <List component="nav" aria-label="main mailbox folders" sx={{paddingTop: '3rem'}}>
        {Routes.map((text, index) => (
        <Link href={'/' + text.path}>
          <ListItemButton button key={text.name} disabled={text.status === 'disabled' ? true : false} selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)} 
          sx={{ 
            marginTop: '.8rem', 
            '&.Mui-selected': {
              borderRadius: '.6rem',        
              backgroundColor: 'secondary.main',
              '&:hover': {
                backgroundColor: 'secondary.main',
              }
            },
          }}
          >
            <ListItemIcon sx={{ color:'text.primary' }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon  />}
            </ListItemIcon>
            <ListItemText primary={text.name} sx={{fontWeight: '700'}}/>
          </ListItemButton>
        </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar sx={{display: { sm: 'none' }}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main', color:'text.main' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main', color:'text.main' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>


      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {props.children}
      </Box>




    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;