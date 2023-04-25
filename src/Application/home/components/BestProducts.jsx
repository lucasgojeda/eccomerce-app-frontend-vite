/** Libraries */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

/** Components */
import { CardProduct } from "../../home";

/** Custom hooks */
import { useProductsStore } from "../../../hooks";

/** Material UI - Custom components */
const CategoryContainer = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "12.5vh",
  overflow: "visible",
}));

const CarouselContainer = styled("div")(({ theme }) => ({
  display: "grid",
  width: "100%",
  height: "27.5ch",
  overflow: "visible",
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "5vh",
}));

/** Carousel data */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1201 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 901 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 601 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export const BestProducts = () => {
  const { bestProducts } = useProductsStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleFixMargin = () => {
    switch (true) {
      case sm:
        return "0";

      case md:
        return "0";

      case lg:
        return "-20vw";
    }
  };

  return (
    <CategoryContainer>
      <TitleContainer>
        <Typography variant="body2" fontSize={18} color="#707B7C">
          Most sold
        </Typography>
      </TitleContainer>

      <CarouselContainer>
        {bestProducts.length !== 0 ? (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            centerMode={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {bestProducts.map((e, i) => (
              <Box key={i} sx={{ marginLeft: handleFixMargin() }}>
                <CardProduct product={e} />
              </Box>
            ))}
          </Carousel>
        ) : (
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            centerMode={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={false}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            width={sm ? "17.5ch" : "20ch"}
            itemClass="carousel-item-padding-40-px"
          >
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={sm ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={sm ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={sm ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={sm ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={sm ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
          </Carousel>
        )}
      </CarouselContainer>
    </CategoryContainer>
  );
};
