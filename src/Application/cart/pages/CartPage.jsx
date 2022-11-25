/** Libraries */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Image } from "cloudinary-react";

import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import CloseIcon from "@mui/icons-material/Close";

/** Components */
import { DialogBuy } from "../../cart";
import { Footer } from "../../ui";

/** Custom hooks */
import { useAuthStore, useCartStore } from "../../../hooks";

/** Material UI - Custom components */
const CartPageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "20vh",
  marginBottom: "12.5vh",
}));

const ProductsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  backgroundColor: "#fff",
  width: "70%",
  height: "50vh",
  overflowY: "scroll",
  marginTop: "1.5%",
  padding: "2.5% 2.5% 2.5% 0",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const ProductRowContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const DeleteIconContainer = styled('div')(({ theme }) => ({
  display: "flex",
  aligntems: "center",
  justifyContent: "center",
  width: "10%",
  [theme.breakpoints.down("sm")]: {
    width: "25%",
  },
}));

const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  aligntems: "center",
  justifyContent: "center",

  "& .MuiSvgIcon-root": {
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
  },
}));

const ProductContainer = styled("div")(({ theme }) => ({
  width: "80%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2.5%",
  marginBottom: "5%",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.025)",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    width: "50%",
  },
}));

const ImageProductContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  minWidth: "10ch",
  maxHeight: "10ch",
}));

const ImageProduct = styled(Image)(({ theme }) => ({
  maxWidth: "10ch",
  maxHeight: "10ch",
}));

const FontName = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginLeft: "2.5%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const FontPrice = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "25%",
  },
}));

const ThereIsNotAnyProductContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  h3: {
    fontSize: "18px",
    color: "dimgray",
  },
}));

const TotalAndButtonContainer = styled("div")(({ theme }) => ({
  marginTop: "1.5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "70%",
  backgroundColor: "#fff",
  height: "10vh",
  paddingRight: "2.5vw",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const TotalContainer = styled("div")(({ theme }) => ({
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid gray",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2.5%",
  marginBottom: "5%",
}));

const BuyButton = styled(Button)(({ theme }) => ({
  width: "10%",
  minWidth: "200px",
  display: "flex",
  justifySelf: "flex-end",
  backgroundColor: "#f7dc6f",
  color: "#000",

  ":hover": {
    backgroundColor: "#f29102",
    color: "#fff",
  },
}));

export const CartPage = () => {
  const navigate = useNavigate();

  const { uid } = useAuthStore();

  const { cart, startDeletedCart } = useCartStore();

  const [totalPrice, setTotalPrice] = useState(0);
  const [dialogBuyOpen, setDialogBuyOpen] = useState(false);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  /** This useEffect get the total price to pay for products */
  useEffect(() => {
    window.scroll(0, 0);

    let counter = 0;

    cart.forEach((e) => {
      counter = counter + parseFloat(e.price);
    });

    setTotalPrice(counter);
  }, [cart]);

  console.log(cart);

  const handleDeleteCart = (e, cartProduct) => {
    e.preventDefault();

    startDeletedCart(
      { _id: cartProduct._id, name: cartProduct.name, img: cartProduct.img },
      uid
    );
  };

  const handleBuy = () => {
    setDialogBuyOpen(true);
  };

  return (
    <>
      <CartPageContainer>
        <DialogBuy
          dialogBuyOpen={dialogBuyOpen}
          setDialogBuyOpen={setDialogBuyOpen}
          cart={cart}
        />
        <ProductsContainer>
          <>
            {cart.length !== 0 ? (
              <>
                {cart.map((e) => (
                  <ProductRowContainer key={e._id}>
                    <DeleteIconContainer>
                      <DeleteIconButton
                        onClick={(event) => handleDeleteCart(event, e)}
                      >
                        <CloseIcon />
                      </DeleteIconButton>
                    </DeleteIconContainer>

                    <ProductContainer
                      onClick={() =>
                        navigate(`/product/${e.category.name}/${e._id}`)
                      }
                    >
                      <ImageProductContainer>
                        <ImageProduct
                          cloudName="the-kings-company"
                          publicId={e.img[0].imageUrl}
                          alt="Product"
                        />
                      </ImageProductContainer>

                      {!sm && <FontName>{e.name}</FontName>}

                      {!sm && (
                        <FontPrice>
                          {`$${new Intl.NumberFormat("es-IN").format(e.price)}`}
                        </FontPrice>
                      )}
                    </ProductContainer>

                    {sm && (
                      <FontPrice>
                        {`$${new Intl.NumberFormat("es-IN").format(e.price)}`}
                      </FontPrice>
                    )}
                  </ProductRowContainer>
                ))}
              </>
            ) : (
              <ThereIsNotAnyProductContainer>
                <h3>Aún no hay ningún producto en el carrito</h3>
              </ThereIsNotAnyProductContainer>
            )}
          </>
        </ProductsContainer>

        <TotalAndButtonContainer>
          <TotalContainer>
            <Typography>Monto total a pagar</Typography>

            <FontPrice>
              {`$${new Intl.NumberFormat("es-IN").format(totalPrice)}`}
            </FontPrice>
          </TotalContainer>

          <ButtonContainer>
            <BuyButton variant="contained" onClick={handleBuy}>
              Finalizar Compra
            </BuyButton>
          </ButtonContainer>
        </TotalAndButtonContainer>
      </CartPageContainer>
      <Footer />
    </>
  );
};
