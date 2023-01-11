/** Libraries */
import { useLocation, useNavigate } from "react-router";

import { Box } from "@mui/material";

import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

/** Material UI - Icons */
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/** Custom hooks */
import { useCartStore } from "../../../../hooks";

export const CartItem = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart: cartProducts } = useCartStore();

  /** Check quantity of products on user cart */
  const badgeNumber = cartProducts.length;

  const handleCartMenu = () => {
    navigate(`/cart`);
  };

  return (
    <Box
      sx={{
        visibility: location.pathname === "/cart" && "hidden",
      }}
    >
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        id="shoppingCartBagleIcon"
        onClick={handleCartMenu}
      >
        <Badge badgeContent={badgeNumber || "0"} color="warning">
          <Tooltip title="Add to cart" arrow>
          <ShoppingCartIcon />
          </Tooltip>
        </Badge>
      </IconButton>
    </Box>
  );
};
