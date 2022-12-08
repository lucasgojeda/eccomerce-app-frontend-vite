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

import Badge from "@mui/material/Badge";

/** Material UI - Icons */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  useAuthStore,
  useCartStore,
  useNotificationsStore,
} from "../../../../../hooks";
import { DialogLogout } from "../../../../ui";

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "5vh",
  marginTop: "2.5vh",
  marginBottom: "2.5vh",
}));

export const MovilMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { uid } = useAuthStore();

  const [stateMenu, setStateMenu] = React.useState(false);
  const [dialogLogoutOpen, setDialogLogoutOpen] = React.useState(false);

  /** Cart badge */
  const { cart: cartProducts } = useCartStore();

  const badgeNumber = cartProducts.length;

  /** Notifications badge */
  const { notifications } = useNotificationsStore();

  const badgeNotifications = notifications?.filter((n) => n.status)?.length;

  const handleCloseMenu = () => {
    setStateMenu(false);
  };

  const handleHomeButton = () => {
    handleCloseMenu();
    navigate("/");
  };

  /** Logged */
  const handleCartButton = () => {
    handleCloseMenu();
    navigate("/cart");
  };

  const handleNotificationsButton = () => {
    handleCloseMenu();
    navigate("/notifications");
  };

  const handleLogOutButton = () => {
    setDialogLogoutOpen(true);
  };

  /** Unlogged */
  const handleLoginButton = () => {
    navigate("/login");
    handleCloseMenu();
  };

  const handleRegisterButton = () => {
    navigate("/register");
    handleCloseMenu();
  };

  return (
    <React.Fragment>
      <DialogLogout
        dialogLogoutOpen={dialogLogoutOpen}
        setDialogLogoutOpen={setDialogLogoutOpen}
        handleCloseMenu={handleCloseMenu}
      />
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
        onOpen={() => {}}
        onClose={handleCloseMenu}
      >
        <Box sx={{ width: "75vw" }}>
          <TitleContainer>
            <Typography variant="body2" fontSize={17} color="inherit">
              Menú
            </Typography>
          </TitleContainer>
          <Divider />
          {pathname !== "/" && (
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
          )}
          {uid ? (
            <>
              <List onClick={handleCartButton}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Badge badgeContent={badgeNumber || "0"} color="warning">
                        <ShoppingCartIcon />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Ir al carrito" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List onClick={handleNotificationsButton}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Badge badgeContent={badgeNotifications || "0"} color="primary">
                        <NotificationsIcon />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Ver notificaciones" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List onClick={handleLogOutButton}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar sesión" />
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          ) : (
            <>
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
            </>
          )}
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
