/** Libraries */
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

/** Custom hooks */
import { useUiStore } from "../../../hooks";

export const ProgressBackdrop = () => {
  const { progressBackdrop } = useUiStore();

  return (
    <Backdrop
      className="container_ProgressBackdrop"
      open={progressBackdrop.status}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1000,
      }}
    >
      <CircularProgress
        color="inherit"
        size="80px"
        sx={{
          display: "block",
        }}
      />
    </Backdrop>
  );
};
