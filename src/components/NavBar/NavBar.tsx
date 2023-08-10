import * as React from 'react';
import { Box, AppBar, CssBaseline, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText, Typography, List, Toolbar, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Button, { ButtonProps } from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { blue, purple } from '@mui/material/colors';
import skydiff from '../../assets/skydiff.png'
import CustomButton from '../Historical/CustomButton';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'App'];
const myColor = {
  color: '#697f98', hover: '#697f98'
}

const DrawerAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SkyDiff
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <Link key={item} to={`/${item}`}>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
            </Link>
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
    <Box sx={{ display: 'flex', height: "64px" }}>
      <CssBaseline />
      <div className='nav-items'>
        <AppBar component="nav" position="absolute" className='nav-bar'>
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
              className='nav-item-typography'
            >
              <div className='nav-item left'>
                SkyDiff
              </div>
              <div className='nav-item center'>
                <img className='nav-logo' src={skydiff} alt="Logo" />
              </div>
              <Box className='nav-item right'>
                {navItems.map((item) => (
                  <Link key={item} to={`/${item}`}>
                    {/* <ColorButton className="nav-button" key={item} variant="contained" size="large">
                      {item}
                    </ColorButton> */}
                    <CustomButton value={item} className="nav-button" myColor={myColor} variant="contained" size="large">
                      
                    </CustomButton>
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