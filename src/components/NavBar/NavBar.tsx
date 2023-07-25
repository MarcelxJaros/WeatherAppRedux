import * as React from 'react';
import { Box, AppBar, CssBaseline, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText, Typography, List, Toolbar, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Button, { ButtonProps } from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { blue, purple } from '@mui/material/colors';
import skydiff from '../../assets/skydiff.png'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'App'];

const DrawerAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2}}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[800],
    "&:hover": {
      backgroundColor: blue[700]
    }
  }));

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: "64px"}}>
      <CssBaseline />
          <div className='nav-items'>
      <AppBar component="nav">
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


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex !important',
            'justifyContent': 'space-around',
            'flexDirection': 'row',
            'alignItems': 'center' , textAlign: 'left',  }}
            style={{ width: '33.33%' }}
            >
            <div>
              SkyDiff 
              </div>
            <div style={{width: '33.33%'}}>
              <img src={skydiff} alt="Logo" style={{ height: "60px", width: "60px"}} />
              </div>
          <Box sx={{ display: { xs: 'none', sm: 'block', width: '33.33%' } }}>
            {navItems.map((item) => (
              <Link key={item} to={`/${item}`} style={{ textDecoration: "none", color: "white"}}>
                <ColorButton key={item} variant="contained" size="large" sx={{ ml: 1, color: '#fff' }} style={{ outline: "none", border: "none" }}>
                  {item}
                </ColorButton>
              </Link>
            ))}
          </Box>
          </Typography>

        </Toolbar>
      </AppBar>
            </div>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;