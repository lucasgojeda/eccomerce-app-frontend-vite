/** Libraries */
import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/** Custom hooks */
import { useAuthStore } from "../../../hooks";

export const DialogLogout = ({
  dialogLogoutOpen,
  setDialogLogoutOpen,
  handleCloseMenu,
}) => {
  const { startLogout } = useAuthStore();

  const handleLogout = () => {
    setDialogLogoutOpen(false);
    handleCloseMenu();
    startLogout();
  };

  const handleClose = () => {
    setDialogLogoutOpen(false);
  };

  return (
    <Dialog
      open={dialogLogoutOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Advertencia"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Está seguro que desea cerrar sesión?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <Button autoFocus onClick={handleLogout}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
