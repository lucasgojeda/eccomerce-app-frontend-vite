/** Libraries */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router-dom";

import { Image } from "cloudinary-react";

import { Button, Container, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ClearIcon from "@mui/icons-material/Clear";

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
  backgroundColor: theme.palette.white.main,
  borderRadius: '5px',
  marginTop: '12.5vh',
  marginBottom: '5vh',
  [theme.breakpoints.down("sm")]: {
    position: 'relative',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.white.main,
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
  justifyContent: 'center',
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
}));

const ProductImagesToShowContainer = styled("div")(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '10%',
  maxHeight: '50ch',
  // marginLeft: '5%',
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
    height: '50ch',
    margin: 'auto',
  }
}));

const IconsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '5vh',
  marginBottom: '20px',
  zIndex: 100,
  [theme.breakpoints.down("sm")]: {
    position: 'absolute',
    left: 0,
    zIndex: 110,
    '.MuiSvgIcon-root': {
      fontSize: '30px',
    },
  }
}));

const ImagesIndexContainer = styled('div')(({ theme }) => ({
  width: '25%',
}));

const ImagesIndex = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.white.main,
  color: theme.palette.black.main,
  fontSize: '24px',
  width: '10vh',
  height: '5vh',
  borderRadius: '20px',
  zIndex: 100,
  transition: 'all .5s ease',
}));

const ProductImage = styled(Image)(({ theme }) => ({
  width: '45ch',
  height: '45ch',
  objectFit: 'contain',
  cursor: 'pointer',
  img: {
    width: '45ch',
    height: '45ch',
    transition: 'all 4s ease-in-out',
  },
  [theme.breakpoints.down("sm")]: {
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    alignItems: 'start',
    height: '45ch',
    objectFit: 'contain',
    zIndex: 100,

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
  width: '100%',
  [theme.breakpoints.down("sm")]: {
    zIndex: 110,
  }
}));

const GoToCartButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.orange.light,
  borderRadius: '10px',
  marginRight: '2.5%',
  color: theme.palette.white.main,
  height: '75%',
  width: '45%',
  zIndex: 100,
  ':hover': {
    backgroundColor: theme.palette.orange.main,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: '120px'
  }
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '5vw',
  height: '5vh',
  marginRight: '15%',
  ':hover': {
    '& .clearIconButton': {
      visibility: 'visible'
    },
    '& .successIconButton': {
      visibility: 'hidden'
    }
  }
}));

const ShoppingCartIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.orange.main,
  zIndex: 100,
}));

const SuccessCartIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.green.main,
  zIndex: 100,
}));

const ClearCartIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.gray.main,
  zIndex: 100,
  visibility: 'hidden',
  [theme.breakpoints.down("sm")]: {
    visibility: 'visible',
  }
}));

const PriceContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '-5vh',
  [theme.breakpoints.down("sm")]: {
    position: 'absolute',
    right: '2.5%',
    marginTop: 0,
  },
}));

const PriceFont = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.blue.light,
  color: '#fff',
  fontSize: '18px',

  padding: '7.5px',
  borderRadius: '10px',
  zIndex: 110,
}));

const NameFont = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
  padding: '0 2.5% 0 2.5%',
  borderRadius: '5px',
  fontSize: '20px',
}));

const DescriptionContainer = styled('div')(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.palette.white.main,
  borderRadius: '5px',
  width: '100%',
  minHeight: '10ch',
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

  const [cartStatus, setCartStatus] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  /** Check if the product is on the user cart */
  useEffect(() => {
    const result = cartProducts.filter((e) => e._id === id);

    if (result.length !== 0) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  }, [cartProducts]);

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
      touchStart.touchX === e.changedTouches[0].clientX &&
      !sm
    ) {
      setModalViewOpen(true);
    }
  };

  const handleClickImage = () => {
    setModalViewOpen(true);
  };

  const handleAddCart = () => {
    setDisableButton(true);
    if (!uid) {
      navigate("/login");
    } else {
      startUpdatedCart({
        _id: product[0]._id,
        name: product[0].name,
        img: product[0].img
      },
        uid,
        setDisableButton);
    }
  };

  const handleDeleteCart = () => {
    setDisableButton(true);
    if (!uid) {
      navigate("/login");
    } else {
      startDeletedCart({
        _id: product[0]._id,
        name: product[0].name,
        img: product[0].img
      },
        uid,
        setDisableButton);
    }
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
          <ImagesContainer
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {!sm && (
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
              <IconsContainer onClick={(e) => {
                e.stopPropagation();
                console.log('click');
              }}>
                {(sm) && (
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
                      visibility: cartStatus ? "visible" : "hidden",
                    }}
                  >
                    <Typography fontSize={12} variant="body2">
                      Go to cart
                    </Typography>
                  </GoToCartButton>

                  <ButtonsContainer className='buttonsContainer'>
                    <Tooltip title="Add to cart" arrow>
                      <ShoppingCartIconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        disabled={disableButton}
                        onClick={handleAddCart}
                        sx={{
                          display: cartStatus && "none",
                        }}
                      >
                        <ShoppingCartIcon />
                      </ShoppingCartIconButton>
                    </Tooltip>

                    <SuccessCartIconButton
                      className='successIconButton'
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      sx={{
                        display: (disableButton || !cartStatus || sm) && "none",
                        visibility: cartStatus ? "visible" : "hidden",
                      }}
                    >
                      <DoneOutlineIcon />
                    </SuccessCartIconButton>

                    <Tooltip title="Remove to cart" arrow>
                      <ClearCartIconButton
                        className="clearIconButton"
                        size="small"
                        edge="end"
                        color="inherit"
                        disabled={disableButton}
                        onClick={handleDeleteCart}
                        sx={{
                          color: "gray",
                          display: !cartStatus && "none",
                        }}
                      >
                        <ClearIcon />
                      </ClearCartIconButton>
                    </Tooltip>
                  </ButtonsContainer>

                </IconButtonsContainer>

              </IconsContainer>

              <ProductImage
                cloudName="the-kings-company"
                publicId={
                  imageSelected !== null ? imageSelected.img : img[0].imageUrl
                }
                alt="Product"
                onClick={handleClickImage}
              />
              <PriceContainer>
                <PriceFont variant="p" component="div">
                  {`$${new Intl.NumberFormat("es-IN").format(price)}`}
                </PriceFont>
              </PriceContainer>
            </ProductImageContainer>
          </ImagesContainer>

          <Divider sx={{ marginTop: '7.5ch' }} />

          <NameFont variant="subtitle2" color="text.primary">
            {name}
          </NameFont>

          <ProductTabNav value={value} setValue={setValue} />

          {value === 0 && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                {description}
              </DescriptionFont>
            </DescriptionContainer>
          )}

          {value === 1 && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                Free shipping to the entire city of La Plata, and shipments
                by Argentine mail to the whole country.
              </DescriptionFont>
            </DescriptionContainer>
          )}

          {value === 2 && (
            <DescriptionContainer>
              <DescriptionFont variant="body1" color="text.primary">
                The client has a maximum of 14 days to return a product
                that he has purchased from the date on which he received it,
                the return expenses are covered by the user himself, we will
                refund the total amount of the article, as long as it is in
                perfect condition with its box and its other accessories.
              </DescriptionFont>
            </DescriptionContainer>
          )}
        </ProductPageContainer>
      </Container>
      <Footer />
    </>
  );
};
