import { useNavigate } from "react-router";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { SearchBar } from "../../../ui";
import { Box, Typography } from "@mui/material";

export const NavbarUnlogged = () => {
  const navigate = useNavigate();

  return (
    <div className="container_largueUnloggedBar">
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
          onClick={() => navigate("login")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <AccountCircleIcon sx={{ mr: "2.5px", fontSize: '18px' }} />
          Ingresar
        </Typography>
      </Box>

      <div className="container_Search">
        <SearchBar />
      </div>
    </div>
  );
};
