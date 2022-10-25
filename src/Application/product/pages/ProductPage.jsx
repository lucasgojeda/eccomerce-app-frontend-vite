import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";

import { Image } from "cloudinary-react";

import { Button, Container, Divider, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import {
  useAuthStore,
  useCartStore,
  useCategoriesStore,
  useProductsStore,
  useUiStore,
} from "../../../hooks";

import { ProductTabNav } from "../../product";
import { ProductModalView } from "../../product";
import { Footer } from "../../ui";

export const ProductPage = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { role, uid } = useAuthStore();

  const { startSetActiveProduct } = useProductsStore();

  const { categories } = useCategoriesStore();

  const {
    cart: cartProducts,
    startDeletedCart,
    startUpdatedCart,
  } = useCartStore();

  const { startUiOpenDialogDelete, startUiOpenProductModalEdit } = useUiStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const [touchStart, setTouchStart] = useState({
    touchX: 0,
    scrollY: 0,
  });
  const [imageSelected, setImageSelected] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalViewOpen, setModalViewOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    setImageSelected(null);
  }, [location]);

  if (!categories || categories.length === 0) {
    return setTimeout(() => {}, 500);
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

  const handleEditButton = (e) => {
    e.preventDefault();

    startUiOpenProductModalEdit();

    handleLogout();
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();

    startUiOpenDialogDelete();

    handleLogout();
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

  // Normal menu
  const handleMenu = (e) => {
    e.preventDefault();

    startSetActiveProduct(product[0]);

    setAnchorEl(e.currentTarget);
  };

  const handleLogout = () => {
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <Box className="container_ProductPage">
          <div id="imagesContainer">
            {!md && (
              <div id="containerProductImagesToShow">
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
                    <Image
                      id="productImagesToShow"
                      cloudName="the-kings-company"
                      publicId={e.imageUrl}
                      alt="Product"
                      onMouseEnter={(event) =>
                        handleImageSelected(event, e.imageUrl, i)
                      }
                    />
                  </Container>
                ))}
              </div>
            )}

            <div id="productImageContainer">
              <div id="iconsContainer">
                {(sm || md) && (
                  <div id="imagesIndexContainer">
                    <div id="imagesIndex">
                      <Typography fontSize={18} variant="body2">
                        {`${
                          imageSelected !== null ? imageSelected.i + 1 : 1
                        } / ${img.length}`}
                      </Typography>
                    </div>
                  </div>
                )}

                <div id="iconButtonsContainer">
                  <Button
                    id="goToCartButton"
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
                  </Button>

                  <div id="buttonsContainer">
                    <IconButton
                      id="ShoppingCartIcon"
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
                    </IconButton>

                    <IconButton
                      id="SuccessCartIcon"
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
                    </IconButton>
                  </div>

                </div>
              </div>

              <Image
                id="productImage"
                cloudName="the-kings-company"
                publicId={
                  imageSelected !== null ? imageSelected.img : img[0].imageUrl
                }
                alt="Product"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={handleClickImage}
              />
              <div id="priceContainer">
                <Typography id="price" gutterBottom variant="p" component="div">
                  {`$${new Intl.NumberFormat("es-IN").format(price)}`}
                </Typography>
              </div>
            </div>

            {!md && (
              <div id="descriptionContainerNextToImage">
                <Typography
                  id="descriptionNextToImage"
                  variant="body1"
                  color="text.primary"
                >
                  {description}
                </Typography>
              </div>
            )}
          </div>

          <Divider id="divider" />

          <Typography id="name" variant="subtitle2" color="text.primary">
            {name}
          </Typography>

          <ProductTabNav value={value} setValue={setValue} />

          {md && value === 0 && (
            <div id="descriptionContainer">
              <Typography id="description" variant="body1" color="text.primary">
                {description}
              </Typography>
            </div>
          )}

          {((md && value === 1) || (!md && value === 0)) && (
            <div id="descriptionContainer">
              <Typography id="description" variant="body1" color="text.primary">
                Envíos sin cargo a toda la ciudad de la plata, y envíos por
                correo Argentino a todo el país.
              </Typography>
            </div>
          )}

          {((md && value === 2) || (!md && value === 1)) && (
            <div id="descriptionContainer">
              <Typography id="description" variant="body1" color="text.primary">
                El cliente dispone de 14 días como maximo para devolver un
                producto que ha adquirido desde la fecha en la que lo haya
                recibido, los gastos por devolucion, son cubiertas por el
                usuario mismo, devolveremos el monto total del articulo, siempre
                y cuando este en perfectas condiciones, con su caja y sus otros
                accesorios.
              </Typography>
            </div>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};
