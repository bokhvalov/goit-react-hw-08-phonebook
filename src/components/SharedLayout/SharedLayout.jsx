import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Toolbar,
  Button,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth';
import { Link, Outlet } from 'react-router-dom';
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Contacts', path: '/contacts' },
];

function SharedLayout() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PHONEBOOK
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map(page => (
                    <MenuItem key={page.name}>
                      <Button
                        component={Link}
                        to={page.path}
                        key={page.name}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PHONEBOOK
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map(page => (
                  <Button
                    component={Link}
                    to={page.path}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <Button
                    component={Link}
                    to={'/login'}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Login
                  </Button>
                )}

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <React.Suspense
        fallback={
          <Container component="main" maxWidth="xs">
            Loading...
          </Container>
        }
      >
        <Outlet />
      </React.Suspense>
    </>
  );
}
export default SharedLayout;

// import { Outlet } from 'react-router-dom';
// import css from './SharedLayout.module.css';
// import styled from 'styled-components';
// import { Suspense } from 'react';
// const { NavLink } = require('react-router-dom');

// const StyledLink = styled(NavLink)`
//   &.active {
//     color: orange;
//   }
// `;

// const SharedLayout = ({ username }) => {
//   return (
//     <>
//       <header>
//         <nav className={css.navigation}>
//           <StyledLink className={css.navigation__item} to="/" end>
//             Home
//           </StyledLink>
//           <StyledLink className={css.navigation__item} to="/contacts">
//             Phonebook
//           </StyledLink>
//         </nav>
//         {username ? (
//           <p className={css.navigation__username}>Welcome, {username}</p>
//         ) : (
//           <StyledLink className={css.navigation__item} to="/Login">
//             Login
//           </StyledLink>
//         )}
//       </header>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default SharedLayout;
