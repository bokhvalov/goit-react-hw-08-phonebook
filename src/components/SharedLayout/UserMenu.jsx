import {
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth';
import { logout } from 'redux/auth/authOperations';

const settings = ['Logout'];
const UserMenu = () => {
const dispatch = useDispatch();
const username = useSelector(authSelectors.name);


  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton disableRipple={true} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          <Typography sx={{ 'padding-left':'10px', color: 'white', 'max-width': '100px'}} align='left'>Welcome, <b>{username}</b></Typography>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting} onClick={() => dispatch(logout())}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;
