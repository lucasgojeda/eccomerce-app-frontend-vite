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
import { CardProduct } from "../../../home";

/** Material UI - Custom components */
const CategoryContainer = styled("div")(({ theme }) => ({
  width: "100%",
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
  justifyContent: "flex-start",
  marginLeft: "2.5%",
  width: "97.5%",
  height: "5vh",
}));

/** Carousel data */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { min: 1201 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 901 },
    items: 4,
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

export const Category = ({ category }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CategoryContainer>
      <TitleContainer>
        <Typography variant="body2" fontSize={18} color="#707B7C">
          {category.name.substring(1, -1).toUpperCase() +
            category.name.substring(1)}
        </Typography>
      </TitleContainer>

      <CarouselContainer>
        {category.products?.length !== 0 ? (
          <Carousel
            swipeable={false}
            draggable={false}
            centerMode={sm ? true : false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {category.products.map((e, i) => (
              <Box key={i}>
                <CardProduct
                  product={{ ...e, category: { name: category.name } }}
                />
              </Box>
            ))}
          </Carousel>
        ) : (
          <Carousel
            swipeable={false}
            draggable={false}
            centerMode={sm ? true : false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={(sm) ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={(sm) ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={(sm) ? "17.5ch" : "20ch"}
                height="20ch"
                animation="wave"
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={(sm) ? "17.5ch" : "20ch"}
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
