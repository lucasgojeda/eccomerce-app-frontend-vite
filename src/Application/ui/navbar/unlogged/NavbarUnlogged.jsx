/** Libraries */
import { useNavigate } from "react-router";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

/** Components */
import { SearchBar } from "../../../ui";
import { MovilMenu } from "../../../ui";
import { Divider, Tooltip } from "@mui/material";

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
  "& .MuiSvgIcon-root": {
    color: "#707B7C",
    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Font = styled("div")(({ theme }) => ({
  minWidth: '150px',
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
        <MovilMenu />
      </MenuContainer>

      <IconsContainer>
        <Tooltip title="Ir al inicio" arrow>
          <HomeIcon
            sx={{ fontSize: "25px", mr: "1vw" }}
            onClick={() => navigate("/")}
          />
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "2.5vh",
            color: "#000",
          }}
        />

        <Font variant="body2" onClick={() => navigate("login")}>
          <AccountCircleIcon sx={{ fontSize: "22.5px", ml: "1vw", mr: '2.5px' }} />
          Iniciar sessión
        </Font>
      </IconsContainer>

      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </Navbar>
  );
};
