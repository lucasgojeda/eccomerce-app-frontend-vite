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
import { Footer } from "../../ui";
import { InfoCredentialsAlert } from "../../cart";

/** Custom hooks */
import { useAuthStore, useCartStore } from "../../../hooks";

/** Material UI - Custom components */
const CartPageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "15vh",
  marginBottom: "12.5vh",
}));

const ProductsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  backgroundColor: "#fff",
  width: "90%",
  height: "50vh",
  overflowY: "scroll",
  overflowX: "hidden",
  // padding: "2.5% 2.5% 2.5% 0",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
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
  maxHeight: '12.5ch',
}));

const FirstContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '60%',
  [theme.breakpoints.down("sm")]: {
    justifyContent: 'center',
    width: '30%',
  },
}));

const SecondContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '30%',
  [theme.breakpoints.down("sm")]: {
    width: '70%',
  },
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '40%',
  height: '5vh'
}));

const DeleteIconContainer = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "10%",
  height: '12.5vh',
  [theme.breakpoints.down("sm")]: {
    width: "25%",
  },
}));

const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
}));

const ImageProductContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "7.5ch",
}));

const ImageProduct = styled(Image)(({ theme }) => ({
  maxWidth: "7.5ch",
  maxHeight: "7.5ch",
  ':hover': {
    cursor: 'pointer'
  }
}));

const FontName = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: "flex-start",
  width: '80%',
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

const FontQuantity = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ButtonQuantity = styled('button')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // color: '#000',
  width: '20px',
  height: '12.5px',
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "90%",
  backgroundColor: "#fff",
  height: "10vh",
  marginTop: "5%",
  borderRadius: "5px",
}));

const TotalProductsContainer = styled("div")(({ theme }) => ({
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: '0.5vh',
}));

const FontProducts = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  backgroundColor: '#2AE3C8',
  color: "#fff",
  marginTop: '2.5vh',

  ':hover': {
    backgroundColor: '#00DFC0',
  },
}));

export const CartPage = () => {
  const navigate = useNavigate();

  const { uid } = useAuthStore();

  const { cart, startDeletedCart, startPayment } = useCartStore();

  const [cartProducts, setCartProducts] = useState([...cart.map((e) => e = {
    ...e,
    quantity: 1
  })]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [infoAlertStatus, setInfoAlertStatus] = useState(false);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  /** This useEffect get the total price to pay for products */
  useEffect(() => {
    window.scroll(0, 0);

    let counterTotalPrice = 0;
    let counterTotalProducts = 0;

    cartProducts.forEach((e) => {
      counterTotalPrice = counterTotalPrice + parseFloat((e.price * e.quantity));
      counterTotalProducts = counterTotalProducts + e.quantity;
    });

    setTotalPrice(counterTotalPrice);
    setTotalProducts(counterTotalProducts);
  }, [cartProducts]);

  const handleDeleteCart = (e, cartProduct) => {
    e.preventDefault();

    startDeletedCart(
      { _id: cartProduct._id, name: cartProduct.name, img: cartProduct.img },
      uid
    );
  };

  const handleBuy = () => {

    if (cartProducts.length !== 0) {

      startPayment(cartProducts, setInfoAlertStatus);
    }
  };

  const handleIncreasedQuantity = ({ id }) => {

    setCartProducts(p => p.map((e) =>
      (e._id.toString() === id.toString())
        ?
        (e = { ...e, quantity: (e.quantity + 1) })
        :
        e
    )
    )
  }

  const handleDecreaseQuantity = ({ id }) => {
    setCartProducts(p => p.map((e) =>
      (e._id.toString() === id.toString())
        ?
        (e = { ...e, quantity: (e.quantity > 1) ? (e.quantity - 1) : e.quantity })
        :
        e
    )
    )
  }

  return (
    <>
      <InfoCredentialsAlert
        infoAlertStatus={infoAlertStatus}
        setInfoAlertStatus={setInfoAlertStatus}
      />
      <CartPageContainer>
        <ProductsContainer>
          <>
            {cartProducts.length !== 0 ? (
              <>
                {cartProducts.map((e) => (
                  <ProductRowContainer key={e._id}>

                    <FirstContainer>
                      <ImageProductContainer>
                        <ImageProduct
                          cloudName="the-kings-company"
                          publicId={e?.img[0]?.imageUrl}
                          alt="Product"
                          onClick={() =>
                            navigate(`/product/${e.category.name}/${e._id}`)
                          }
                        />
                      </ImageProductContainer>

                      {!sm && <FontName>{e.name}</FontName>}
                    </FirstContainer>

                    <SecondContainer>
                      {!sm && (
                        <FontPrice>
                          {`$${new Intl.NumberFormat("es-IN").format((e.price * e.quantity))}`}
                        </FontPrice>
                      )}

                      {sm && (
                        <FontPrice>
                          {`$${new Intl.NumberFormat("es-IN").format((e.price * e.quantity))}`}
                        </FontPrice>
                      )}

                      <ButtonsContainer>
                        <ButtonQuantity onClick={() => handleDecreaseQuantity({ id: e._id })}>-</ButtonQuantity>
                        <FontQuantity>{e.quantity}</FontQuantity>
                        <ButtonQuantity onClick={() => handleIncreasedQuantity({ id: e._id })}>+</ButtonQuantity>
                      </ButtonsContainer>

                      <DeleteIconContainer>
                        <DeleteIconButton
                          onClick={(event) => handleDeleteCart(event, e)}
                        >
                          <CloseIcon />
                        </DeleteIconButton>
                      </DeleteIconContainer>
                    </SecondContainer>

                  </ProductRowContainer>
                ))}
              </>
            ) : (
              <ThereIsNotAnyProductContainer>
                <h3>There are no products in the cart yet</h3>
              </ThereIsNotAnyProductContainer>
            )}
          </>
        </ProductsContainer>

        <TotalAndButtonContainer>
          <TotalProductsContainer>
            <Typography>Quantity of products</Typography>

            <FontProducts>
              {totalProducts}
            </FontProducts>
          </TotalProductsContainer>

          <TotalContainer>
            <Typography>Total amount to pay</Typography>

            <FontPrice>
              {`$${new Intl.NumberFormat("es-IN").format(totalPrice)}`}
            </FontPrice>
          </TotalContainer>

          <ButtonContainer>
            <BuyButton variant="contained" onClick={handleBuy}>
              Buy
            </BuyButton>
          </ButtonContainer>
        </TotalAndButtonContainer>
      </CartPageContainer>
      <Footer />
    </>
  );
};
