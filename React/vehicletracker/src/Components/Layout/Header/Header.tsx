import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, ThemeProvider, createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "./Header.css";

function Header(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose} component={NavLink} to="/search/car">
              Vehicle Tracking
            </MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/search/bike">
              Bike Tracking
            </MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/search/truck">
              Truck Tracking
            </MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/search/off-road">
              Off-Road Vehicle Tracking
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AutoTrack
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
