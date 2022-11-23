/** Libraries */
import * as React from "react";
import { useLocation, useNavigate } from "react-router";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";

import styled from "@emotion/styled";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";

/** Material UI - Icons */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "5vh",
  marginTop: '2.5vh',
}));

export default function SwipeableMenuDrawer() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [stateMenu, setStateMenu] = React.useState(false);

  const handleCloseMenu = () => {

    setStateMenu(false);
  }
  
  const handleHomeButton = () => {
    
    navigate('/');
    handleCloseMenu();
  }
  
  const handleLoginButton = () => {
    
    navigate('/login');
    handleCloseMenu();
  }
  
  const handleRegisterButton = () => {
    
    navigate('/register');
    handleCloseMenu();
  }
  return (
    <div>
      <React.Fragment>
        <IconButton
          className="DoneOutlineIcon"
          size="small"
          edge="end"
          color="inherit"
          onClick={() => setStateMenu(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={stateMenu}
          onClose={handleCloseMenu}
        >
          <Box sx={{ width: "75vw" }}>
            <TitleContainer>
              <Typography variant="body2" fontSize={17} color="inherit">
                Menú
              </Typography>
            </TitleContainer>
            <Divider />
            {
              (pathname !== '/')
              &&
            <List onClick={handleHomeButton}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </ListItem>
            </List>
            }
            <List onClick={handleLoginButton}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Iniciar sesión" />
                </ListItemButton>
              </ListItem>
            </List>
            <List onClick={handleRegisterButton}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Registrarse" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
