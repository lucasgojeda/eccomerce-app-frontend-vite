/** Libraries */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";

import { Image } from "cloudinary-react";

import { Button, Container, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

/** Components */
import { ProductTabNav } from "../../product";
import { ProductModalView } from "../../product";
import { Footer } from "../../ui";

/** Custom hooks */
import {
  useAuthStore,
  useCartStore,
  useCategoriesStore,
} from "../../../hooks";

/** Material UI - Custom components */
const ProductPageContainer = styled("div")(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '5px',
  marginTop: '12.5vh',
  marginBottom: '5vh',
  [theme.breakpoints.down("sm")]: {
    position: 'relative',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    marginTop: '6vh',
    marginBottom: '5vh',
    overflowX: 'hidden',
  },
}));

const ImagesContainer = styled("div")(({ theme }) => ({
  width: '100%',
  height: '50ch',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
  [theme.breakpoints.between("sm", "md")]: {
    justifyContent: 'center',
  },
}));

const ProductImagesToShowContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '10%',
  maxHeight: '50ch',
  marginLeft: '5%',
  marginTop: '5vh',
}));

const ImageProductsToShow = styled(Image)(({ theme }) => ({
  display: 'block',
  maxWidth: '10ch',
  maxHeight: '8ch',
  margin: 'auto',
}));

const ProductImageContainer = styled('div')(({ theme }) => ({
  maxWidth: '60%',
  maxHeight: '45ch',
  margin: 'auto',
  [theme.breakpoints.down("sm")]: {
    width: '100%',
    height: '50ch',
    margin: 'auto',
    // marginBottom: '12.5%',
  }
}));

const IconsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  maxHeight: '50px',
  zIndex: 100,
}));

const ImagesIndexContainer = styled('div')(({ theme }) => ({
  width: '25%',
}));

const ImagesIndex = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  color: '#000',
  fontSize: '24px',
  width: '10vh',
  height: '5vh',
  borderRadius: '20px',
  zIndex: 100,
}));

const ProductImage = styled(Image)(({ theme }) => ({
  width: '45ch',
  height: '45ch',
  objectFit: 'contain',
  marginLeft: '8%',
  cursor: 'pointer',
  img: {
    width: '45ch',
    height: '45ch',
  },
  [theme.breakpoints.down("sm")]: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    height: '45ch',
    objectFit: 'contain',

    img: {
      width: '100%',
      height: 'auto',
    }
  },
}));

const IconButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '75%',
}));

const GoToCartButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F29102',
  borderRadius: '10px',
  marginRight: '2.5%',
  color: '#fff',
  height: '75%',
  width: '45%',
  zIndex: 100,
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '50px',
  maxHeight: '50px',
  marginRight: '15%',
}));

const ShoppingCartIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: '#F29102',
  zIndex: 100,
}));

const SuccessCartIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: '#0B5345',
  zIndex: 100,
}));

const PriceContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '2.5vh',
}));

const PriceFont = styled(Typography)(({ theme }) => ({
  backgroundColor: '#F29102',
  color: '#fff',
  fontSize: '18px',
  marginTop: '-10%',
  marginRight: '-10%',
  padding: '7.5px',
  borderRadius: '10px',
  zIndex: 110,
}));

const DescriptionNextToImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '5%',
  display: 'block',
  backgroundColor: '#fff',
  borderRadius: '5px',
  width: '25%',
  height: '45ch',
  maxHeight: '45ch',
  padding: '2.5ch',
  overflow: 'hidden',
  margin: 'auto',
  objectFit: 'cover',
  overflowY: 'scroll',
  zIndex: 100,
}));

const DescriptionNextToImageFont = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  width: 'auto',
  padding: '0%',
  marginBottom: '1vh',
  fontSize: '16px',
}));

const NameFont = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
  padding: '0 2.5% 0 2.5%',
  borderRadius: '5px',
  fontSize: '20px',
}));

const DescriptionContainer = styled('div')(({ theme }) => ({
  display: 'block',
  backgroundColor: '#fff',
  borderRadius: '5px',
  width: '100%',
  minHeight: '10ch',
  overflow: 'hidden',
  margin: 'auto',
  marginBottom: '2.5vh',
  objectFit: 'cover',
  overflow: 'contain',
}));

const DescriptionFont = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  width: 'auto',
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
  padding: '2.5%',
  fontSize: '16px',
}));

export const ProductPage = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { role, uid } = useAuthStore();

  const { categories } = useCategoriesStore();

  const {
    cart: cartProducts,
    startDeletedCart,
    startUpdatedCart,
  } = useCartStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const [touchStart, setTouchStart] = useState({
    touchX: 0,
    scrollY: 0,
  });
  const [imageSelected, setImageSelected] = useState(null);
  const [modalViewOpen, setModalViewOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    setImageSelected(null);
  }, [location]);

  if (!categories || categories.length === 0) {
    return setTimeout(() => { }, 500);
  }

  const data = categories?.filter((e) => e.name === category);
  const product = data[0].products?.filter((e) => e._id === id);

  // console.log(product);

  const { name, price, description, img } = product[0];

  const handleTouchStart = (e) => {
    setTouchStart({
      touchX: e.changedTouches[0].clientX,
      scrollY: window.scrollY,
    });
  };

  const handleTouchEnd = (e) => {
    if (
      window.scrollY === touchStart.scrollY &&
      touchStart.touchX !== e.changedTouches[0].clientX
    ) {
      if (e.changedTouches[0].clientX > touchStart.touchX) {
        //ToLeft
        if (imageSelected !== null) {
          img.forEach(
            (image, index) =>
              index ===
              (imageSelected.i <= 0 ? img.length - 1 : imageSelected.i - 1) &&
              setImageSelected({
                i: index,
                img: image.imageUrl,
              })
          );
        } else {
          img.forEach(
            (image, index) =>
              index === img.length - 1 &&
              setImageSelected({
                i: index,
                img: image.imageUrl,
              })
          );
        }
      } else {
        //ToRight
        if (imageSelected !== null) {
          img.forEach(
            (image, index) =>
              index ===
              (imageSelected.i + 1 >= img.length ? 0 : imageSelected.i + 1) &&
              setImageSelected({
                i: index,
                img: image.imageUrl,
              })
          );
        } else {
          img.forEach(
            (image, index) =>
              index === 1 &&
              setImageSelected({
                i: index,
                img: image.imageUrl,
              })
          );
        }
      }
    }

    if (
      window.scrollY === touchStart.scrollY &&
      touchStart.touchX === e.changedTouches[0].clientX
    ) {
      setModalViewOpen(true);
    }
  };

  const handleClickImage = () => {
    setModalViewOpen(true);
  };

  const handleAddCart = () => {
    if (role) {
      startUpdatedCart(
        { _id: product[0]._id, name: product[0].name, img: product[0].img },
        uid
      );
    } else {
      navigate("/login");
    }
  };

  const handleDeleteCart = () => {
    startDeletedCart(
      { _id: product[0]._id, name: product[0].name, img: product[0].img },
      uid
    );
  };

  const handleImageSelected = (e, newImageSelected, i) => {
    e.preventDefault();

    setImageSelected({
      i,
      img: newImageSelected,
    });
  };

  return (
    <>
      <ProductModalView
        modalViewOpen={modalViewOpen}
        imageSelected={imageSelected}
        img={img}
        setModalViewOpen={setModalViewOpen}
        handleTouchEnd={handleTouchEnd}
        handleTouchStart={handleTouchStart}
        setImageSelected={setImageSelected}
      />
      <Container>
        <ProductPageContainer>
          <ImagesContainer>
            {!md && (
              <ProductImagesToShowContainer>
                {img.map((e, i) => (
                  <Container
                    key={i}
                    sx={{
                      cursor: "pointer",
                      opacity:
                        !imageSelected && e.imageUrl === img[0].imageUrl
                          ? "25%"
                          : e.imageUrl === imageSelected?.img && "25%",
                    }}
                  >
                    <ImageProductsToShow
                      cloudName="the-kings-company"
                      publicId={e.imageUrl}
                      alt="Product"
                      onMouseEnter={(event) =>
                        handleImageSelected(event, e.imageUrl, i)
                      }
                    />
                  </Container>
                ))}
              </ProductImagesToShowContainer>
            )}

            <ProductImageContainer>
              <IconsContainer>
                {(sm || md) && (
                  <ImagesIndexContainer>
                    <ImagesIndex>
                      <Typography fontSize={18} variant="body2">
                        {`${imageSelected !== null ? imageSelected.i + 1 : 1
                          } / ${img.length}`}
                      </Typography>
                    </ImagesIndex>
                  </ImagesIndexContainer>
                )}

                <IconButtonsContainer>
                  <GoToCartButton
                    onClick={() => navigate("/cart")}
                    sx={{
                      visibility:
                        cartProducts?.filter((event) => event._id === id)
                          .length !== 0 && cartProducts
                          ? "visible"
                          : "hidden",
                    }}
                  >
                    <Typography fontSize={12} variant="body2">
                      Ir al carrito
                    </Typography>
                  </GoToCartButton>

                  <ButtonsContainer>
                    <ShoppingCartIconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={handleAddCart}
                      sx={{
                        visibility: role
                          ? cartProducts?.filter(
                            (event) => event._id === id && cartProducts
                          ).length === 0
                            ? "visible"
                            : "hidden"
                          : "visible",
                      }}
                    >
                      <ShoppingCartIcon />
                    </ShoppingCartIconButton>

                    <SuccessCartIconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={handleDeleteCart}
                      sx={{
                        visibility:
                          cartProducts?.filter((event) => event._id === id)
                            .length !== 0 && cartProducts
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      <DoneOutlineIcon />
                    </SuccessCartIconButton>
                  </ButtonsContainer>

                </IconButtonsContainer>
              </IconsContainer>

              <ProductImage
                cloudName="the-kings-company"
                publicId={
                  imageSelected !== null ? imageSelected.img : img[0].imageUrl
                }
                alt="Product"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={handleClickImage}
              />
              <PriceContainer>
                <PriceFont variant="p" component="div">
                  {`$${new Intl.NumberFormat("es-IN").format(price)}`}
                </PriceFont>
              </PriceContainer>
            </ProductImageContainer>

            {!md && (
              <DescriptionNextToImageContainer>
                <DescriptionNextToImageFont
                  variant="body1"
                  color="text.primary"
                >
                  {description}
                </DescriptionNextToImageFont>
              </DescriptionNextToImageContainer>
            )}
          </ImagesContainer>

          <Divider sx={{ marginTop: '7.5ch' }} />

          <NameFont variant="subtitle2" color="text.primary">
            {name}
          </NameFont>

          <ProductTabNav value={value} setValue={setValue} />

          {md && value === 0 && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                {description}
              </DescriptionFont>
            </DescriptionContainer>
          )}

          {((md && value === 1) || (!md && value === 0)) && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                Envíos sin cargo a toda la ciudad de la plata, y envíos por
                correo Argentino a todo el país.
              </DescriptionFont>
            </DescriptionContainer>
          )}

          {((md && value === 2) || (!md && value === 1)) && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                El cliente dispone de 14 días como maximo para devolver un
                producto que ha adquirido desde la fecha en la que lo haya
                recibido, los gastos por devolucion, son cubiertas por el
                usuario mismo, devolveremos el monto total del articulo, siempre
                y cuando este en perfectas condiciones, con su caja y sus otros
                accesorios.
              </DescriptionFont>
            </DescriptionContainer>
          )}
        </ProductPageContainer>
      </Container>
      <Footer />
    </>
  );
};
