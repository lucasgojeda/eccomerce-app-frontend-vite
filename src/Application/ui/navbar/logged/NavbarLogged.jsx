import { CartItem } from "../../../ui";
import { NotificationsItem } from "../../../ui";
import { SearchBar } from "../../../ui";
import { MenuDrawer } from "../../../ui";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import { useAuthStore } from "../../../../hooks";
// import { DialogLogout } from '../../../../dashboard/ui/alerts/DialogLogout';

export const NavbarLogged = () => {
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
        }}
      >
        <Typography
          variant="body2"
          fontSize={17}
          color="#707B7C"
          onClick={startLogout}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <LogoutIcon sx={{ mr: "2.5px", fontSize: "18px" }} />
          Cerrar sesión
        </Typography>
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
