/** Libraries */
import moment from "moment";
import "moment-timezone";
import "moment/locale/es";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import { Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

/** Material UI - Icons */
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/** Components */
import { useNotificationsStore } from "../../../hooks";

/** Custom hooks */
import { Footer } from "../../ui";

/** Material UI - Custom components */
const NotificationsPageContaiener = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  marginTop: "10vh",
  marginBottom: "5vh",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
  },
}));

const TableContaiener = styled("div")(({ theme }) => ({
  width: "80%",
  height: "87.5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  overflowX: "cover",
  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 2px)",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const PaginationContaiener = styled("div")(({ theme }) => ({
  width: "100%",
  height: "7.5vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1976d2",
  color: "#fff",
  borderTop: "1px solid rgba(98, 101, 103, 0.25)",
  "& .MuiSvgIcon-root": {
    fontSize: "45px",
    color: "#fff",
  },
}));

moment.locale("es");

export const NotificationsPage = () => {
  const { sales_user, notifications, notificationStartUpdated } =
    useNotificationsStore();

  const handleSendedButton = (e, notification) => {
    e.preventDefault();

    notificationStartUpdated(notification);
  };

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <NotificationsPageContaiener>
        <TableContaiener>
          {sales_user?.length !== 0 && sales_user !== null ? (
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    Cantidad de productos
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Total a pagar
                  </StyledTableCell>
                  {!sm && !md && (
                    <StyledTableCell align="center">
                      Fecha del envio
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sales_user?.map(
                  (e, i) =>
                    e.date_sended && (
                      <>
                        {notifications.map(
                          (n) =>
                            n.sale === e._id && (
                              <TableRow
                                width="100%"
                                key={e.id}
                                sx={{
                                  backgroundColor: n.status
                                    ? "#fff"
                                    : "rgba(166, 172, 175, 0.4)",
                                }}
                              >
                                <TableCell
                                  align="left"
                                  component="th"
                                  scope="row"
                                  sx={{
                                    color: n.status ? "#000" : "#626567",
                                  }}
                                >
                                  {`${e.cart?.length} produtos`}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{
                                    color: n.status ? "#000" : "#626567",
                                  }}
                                >
                                  {`$${new Intl.NumberFormat("es-IN").format(
                                    e.total_price
                                  )}`}
                                </TableCell>
                                {!sm && !md && (
                                  <TableCell
                                    align="center"
                                    sx={{
                                      color: n.status ? "#000" : "#626567",
                                    }}
                                  >
                                    {moment(e?.date_sended)
                                      .tz("America/Argentina/Buenos_Aires")
                                      .format("LLL")}
                                  </TableCell>
                                )}
                                <TableCell align="center">
                                  {n.status ? (
                                    <Tooltip title="Marcar como visto" arrow>
                                      <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={(event) =>
                                          handleSendedButton(event, n)
                                        }
                                        color="inherit"
                                        sx={{ maxHeight: "20px" }}
                                      >
                                        <CheckBoxOutlineBlankIcon />
                                      </IconButton>
                                    </Tooltip>
                                  ) : (
                                    <IconButton
                                      size="large"
                                      aria-label="account of current user"
                                      aria-controls="menu-appbar"
                                      aria-haspopup="true"
                                      color="inherit"
                                      disabled={true}
                                      sx={{ maxHeight: "20px" }}
                                    >
                                      <CheckBoxIcon />
                                    </IconButton>
                                  )}
                                </TableCell>
                              </TableRow>
                            )
                        )}
                      </>
                    )
                )}
              </TableBody>
            </Table>
          ) : (
            <Box width={sm ? "90%" : "100"}>
              <Skeleton height={80} animation="wave" />
              <Skeleton height={80} animation="wave" />
              <Skeleton height={80} animation="wave" />
              <Skeleton height={80} animation="wave" />
              <Skeleton height={80} animation={false} />
              <Skeleton height={80} animation={false} />
              <Skeleton height={80} animation={false} />
              <Skeleton height={80} animation={false} />
              <Skeleton height={80} animation={false} />
              <Skeleton height={80} animation={false} />
            </Box>
          )}
          <PaginationContaiener>
            <Tooltip title="Página anterior" arrow>
              <IconButton
                color="primary"
                component="span"
                // disabled={users?.previousPage === null ? true : false}
                // onClick={handlePreviusPage}
              >
                <ArrowLeftIcon />
              </IconButton>
            </Tooltip>
            <Typography color="#fff" fontSize="16px" variant="body2">
              Página 1{/* Page {page} */}
            </Typography>
            <Tooltip title="Página siguiente" arrow>
              <IconButton
                color="primary"
                component="span"
                // disabled={users?.nextPage === null ? true : false}
                // onClick={handleNextPage}
              >
                <ArrowRightIcon />
              </IconButton>
            </Tooltip>
          </PaginationContaiener>
        </TableContaiener>
      </NotificationsPageContaiener>
      <Footer />
    </>
  );
};
