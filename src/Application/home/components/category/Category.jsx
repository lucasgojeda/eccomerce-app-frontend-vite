import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useProductsStore } from "../../../../hooks";

import { CardProduct } from "../../../home";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

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

export const Category = ({ category, index }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "2.5%",
          width: "97.5%",
          height: "5vh",
        }}
      >
        <Typography variant="body2" fontSize={18} color="#707B7C">
          {category.name.substring(1, -1).toUpperCase() +
            category.name.substring(1)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          height: "27.5ch",
          overflow: "visible",
        }}
      >
        <Carousel
          swipeable={false}
          draggable={false}
          centerMode={sm ? true : false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
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
      </Box>
    </Box>
  );
};
