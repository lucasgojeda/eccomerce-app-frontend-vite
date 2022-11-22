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
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

export const NavbarLogged = () => {
  const navigate = useNavigate();

  const { startLogout } = useAuthStore();

  return (
    <div className="container_largueLoggedBar">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginLeft: "1.5vw",
          width: "25vw",
          "& .MuiSvgIcon-root": {
            mr: "2.5px",
            ml: "2.5px",
            // fontSize: "25px",
            color: "#707B7C",
            cursor: "pointer",
          },
        }}
      >
        <Tooltip title="Ir al inicio" arrow>
          <HomeIcon sx={{ fontSize: "25px" }} onClick={() => navigate('/')} />
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
      </Box>

      <div className="container_items">
        <div className="container_CartItem">
          <CartItem />

          <NotificationsItem />
        </div>

        <div className="container_Search">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
