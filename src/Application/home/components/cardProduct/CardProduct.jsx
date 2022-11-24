/** Libraries */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

/** Custom hooks */
import { useAuthStore, useCartStore } from "../../../../hooks";

/** Material UI - Custom components */
const ProductContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20ch",
  height: "20ch",
  borderRadius: "5px",
  background: "#fff",
  transition: "all 0.3s ease-in",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.15)",
    transition: "all 0.2s ease-in",
    boxShadow: "2.5px 2.5px 5px rgba(167, 164, 164, 0.418)",
    border: "1px solid rgba(167, 164, 164, 0.418)",
    "& .CartIconContainer": {
      visibility: "visible",
    },
    "& .LabelCartContainer": {
      visibility: "visible",
    },
    "& .TitlePriceContainer": {
      backgroundColor: "rgba(84, 153, 199, 0.85)",
    },
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  maxWidth: "17.5ch",
  maxHeight: "17.5ch",
}));

const IconsContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "20ch",
  height: "20ch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingRight: "0.75vw",
  zIndex: 100,
}));

const CartIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "100%",
  height: "5vh",
  zIndex: 110,
  visibility: "hidden",
  "& .MuiSvgIcon-root": {
    fontSize: "22.5px",
  },
}));

const LabelCartContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "100%",
  height: "7.5vh",
  visibility: "hidden",
}));

const Font = styled("h3")(({ theme }) => ({
  backgroundColor: "#f1c40f",
  fontSize: "14px",
  color: "#fff",
  padding: "7.5px",
  marginLeft: "-2vh",
  transform: "rotate(-45deg)",
  zIndex: 110,
}));

const DoneAndClearIconsContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  minWidth: "2.5vw",
  minHeight: "2.5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  flexWrap: "wrap",
  ":hover": {
    "& .DoneOutlineIcon": {
      visibility: "hidden",
    },
    "& .ClearIcon": {
      visibility: "visible",
    },
  },
  "& .DoneOutlineIcon": {
    position: "absolute",
  },
  "& .ClearIcon": {
    position: "absolute",
    visibility: "hidden",
  },
}));

const PriceContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "100%",
  height: "5vh",
  paddingLeft: "0.75vw",
}));

const TitlePriceContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "7.5px",
  borderRadius: "15px",
  backgroundColor: "rgba(84, 153, 199, 0.65)",
  h3: {
    fontSize: "12px",
    color: "#fff",
  },
}));

const BackShadow = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
}));

export const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const [cartStatus, setCartStatus] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const { uid } = useAuthStore();

  const { cart, startUpdatedCart, startDeletedCart } = useCartStore();

  /** Check if the product is on the user cart */
  useEffect(() => {
    const result = cart.filter((e) => e._id === product._id);

    if (result.length !== 0) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  }, [cart]);

  const handleGoToCart = (e) => {
    e.stopPropagation();
    navigate("/cart");
  };

  /** Add a product to the cart */
  const handleAddCart = (e) => {
    e.stopPropagation();
    setDisableButton(true);
    if (!uid) {
      navigate("/login");
    } else {
      startUpdatedCart(product, uid, setDisableButton);
    }
  };

  /** Quit a product of the cart */
  const handleDeleteCart = (e) => {
    e.stopPropagation();
    setDisableButton(true);
    if (!uid) {
      navigate("/login");
    } else {
      startDeletedCart(product, uid, setDisableButton);
    }
  };

  return (
    <ProductContainer>
      <ProductImage src={product.img[0].imageUrl} alt="" />

      <IconsContainer>
        <CartIconContainer
          className="CartIconContainer"
          onClick={() =>
            navigate(`/product/${product.category.name}/${product._id}`)
          }
        >
          <LabelCartContainer
            className="LabelCartContainer"
            style={{
              display: !cartStatus && "none",
            }}
          >
            <Font onClick={handleGoToCart}>Carrito</Font>
          </LabelCartContainer>
          <Tooltip title="Añadir al carrito" arrow>
            <IconButton
              className="ShoppingCartIcon"
              size="small"
              edge="end"
              color="inherit"
              disabled={disableButton}
              onClick={handleAddCart}
              sx={{
                display: cartStatus && "none",
                color: "#f1c40f",
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>

          <DoneAndClearIconsContainer sx={{ display: !cartStatus && "none" }}>
            <IconButton
              className="DoneOutlineIcon"
              size="small"
              edge="end"
              color="inherit"
              sx={{
                display: disableButton && "none",
                color: "#0b5345",
              }}
            >
              <DoneOutlineIcon />
            </IconButton>

            <Tooltip title="Quitar del carrito" arrow>
              <IconButton
                className="ClearIcon"
                size="small"
                edge="end"
                color="inherit"
                disabled={disableButton}
                onClick={handleDeleteCart}
                sx={{ color: "gray" }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </DoneAndClearIconsContainer>
        </CartIconContainer>

        <PriceContainer>
          <TitlePriceContainer className="TitlePriceContainer">
            <h3>
              {`$${new Intl.NumberFormat("es-IN").format(product.price)}`}
            </h3>
          </TitlePriceContainer>
        </PriceContainer>

        <BackShadow
          onClick={() =>
            navigate(`/product/${product.category.name}/${product._id}`)
          }
        ></BackShadow>
      </IconsContainer>
    </ProductContainer>
  );
};
