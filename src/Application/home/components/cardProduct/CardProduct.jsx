import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import IconButton from "@mui/material/IconButton";

import { useAuthStore, useCartStore } from "../../../../hooks";
import { Box } from "@mui/material";

export const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const [cartStatus, setCartStatus] = useState(false);

  const { uid } = useAuthStore();

  const { cart, startUpdatedCart, startDeletedCart } = useCartStore();

  useEffect(() => {
    const result = cart.filter((e) => e._id === product._id);

    if (result.length !== 0) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  }, [cart]);

  const handleAddCart = () => {
    if (!uid) {
      navigate("/login");
    } else {
      startUpdatedCart(product, uid);
    }
  };

  const handleDeleteCart = () => {
    if (!uid) {
      navigate("/login");
    } else {
      startDeletedCart(product, uid);
    }
  };

  return (
    <Box className="container_CardProduct">
      <img src={product.img[0].imageUrl} alt="" />

      <div className="container_IconsProduct">
        <div className="container_CartIcon">
          <div
            className="container_LabelCart"
            onClick={() => navigate("/cart")}
            style={{
              display: !cartStatus && "none",
            }}
          >
            <h3>Carrito</h3>
          </div>
          <IconButton
            className="shoppingIcon"
            size="small"
            edge="end"
            color="inherit"
            onClick={handleAddCart}
            sx={{
              display: cartStatus && "none",
            }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <IconButton
            className="doneIcon"
            size="small"
            edge="end"
            color="inherit"
            onClick={handleDeleteCart}
            sx={{
              display: !cartStatus && "none",
            }}
          >
            <DoneOutlineIcon />
          </IconButton>
        </div>

        <div className="container_Price">
          <div className="titlePrice">
            <h3>
              {`$${new Intl.NumberFormat("es-IN").format(product.price)}`}
            </h3>
          </div>
        </div>

        <div
          className="backShadow"
          onClick={() =>
            navigate(`/product/${product.category.name}/${product._id}`)
          }
        ></div>
      </div>
    </Box>
  );
};
