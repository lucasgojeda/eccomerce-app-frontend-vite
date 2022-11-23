/** Libraries */
import { useNavigate } from "react-router";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/** Components */
import { SearchBar } from "../../../ui";
import SwipeableMenuDrawer from "./components/swipeableMenuDrawer/SwipeableMenuDrawer";

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

const IconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  marginLeft: "1.5vw",
  width: "25vw",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Font = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "17px",
  color: "#707B7C",
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
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

export const NavbarUnlogged = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <MenuContainer>
      <SwipeableMenuDrawer />
      </MenuContainer>

      <IconsContainer>
        <Font variant="body2" onClick={() => navigate("login")}>
          <AccountCircleIcon sx={{ mr: "2.5px", fontSize: "18px" }} />
          Iniciar sessión
        </Font>
      </IconsContainer>

      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </Navbar>
  );
};
