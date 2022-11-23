import { CartItem } from "../../../ui";
import { NotificationsItem } from "../../../ui";
import { SearchBar } from "../../../ui";
import { MenuDrawer } from "../../../ui";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Divider, Typography } from "@mui/material";
import { useAuthStore } from "../../../../hooks";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import MovilMenuLogged from "./components/swipeableMenuDrawer/MovilMenuLogged";
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

/** Material UI - Custom components */
const Navbar = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "10vh",
  backgroundColor: "#fff",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1000,
}));

const FirstIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  marginLeft: "1.5vw",
  width: "25vw",
  "& .MuiSvgIcon-root": {
    mr: "2.5px",
    ml: "2.5px",
    color: "#707B7C",
    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SecondIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const CartItemContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "30%",
  color: "#707B7C",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    width: "85%",
    display: "none",
  },
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "1.5%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const MenuContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "15%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavbarLogged = () => {
  const navigate = useNavigate();

  const { startLogout } = useAuthStore();

  return (
    <Navbar>
      <MenuContainer>
        <MovilMenuLogged />
      </MenuContainer>

      <FirstIconsContainer>
        <Tooltip title="Ir al inicio" arrow>
          <HomeIcon sx={{ fontSize: "25px" }} onClick={() => navigate("/")} />
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "2.5vh",
            color: "#000",
          }}
        />

        <Tooltip title="Cerrar sesión" arrow>
          <LogoutIcon sx={{ fontSize: "22.5px" }} onClick={startLogout} />
        </Tooltip>
      </FirstIconsContainer>

      <SecondIconsContainer>
        <CartItemContainer>
          <CartItem />

          <NotificationsItem />
        </CartItemContainer>

        <SearchContainer>
          <SearchBar />
        </SearchContainer>
      </SecondIconsContainer>
    </Navbar>
  );
};
