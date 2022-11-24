/** Libraries */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

/** Material UI - Icons */
import NotificationsIcon from "@mui/icons-material/Notifications";

/** Custom hooks */
import { useNotificationsStore } from "../../../../../hooks";

export const NotificationsItem = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { notifications } = useNotificationsStore();

  /** Check user notifications quantity */
  var badgeNotifications = notifications?.filter((n) => n.status)?.length;

  useEffect(() => {
    badgeNotifications = notifications?.filter((n) => n.status)?.length;
  }, [notifications]);

  return (
    <Box
      sx={{
        visibility: location.pathname === "/notifications" && "hidden",
      }}
    >
      <IconButton
        id="notificationsBagleIcon"
        color="inherit"
        size="large"
        edge="end"
        onClick={() => navigate("/notifications")}
      >
        <Badge badgeContent={badgeNotifications} color="primary">
          <Tooltip title="Mis notificaciones" arrow>
            <NotificationsIcon />
          </Tooltip>
        </Badge>
      </IconButton>
    </Box>
  );
};
