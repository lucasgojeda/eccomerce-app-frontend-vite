/** Libraries */
import { styled } from "@mui/material/styles";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

/** Components */
import { CardProduct } from "../../home";
import { Footer } from "../../ui";

/** Custom hooks */
import { useProductsStore, useUiStore } from "../../../hooks";

/** Material UI - Custom components */
const SearchPageContainer = styled("div")(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
}));

const CardsContainer = styled("div")(({ theme }) => ({
  width: '100%',
  minHeight: '70vh',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.5vw',
  // alingContent: 'center',
  // alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '15vh',
  [theme.breakpoints.between("600", "700")]: {
    justifyContent: 'space-around',
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: 'center',
  },
}));

const SearchCardContainer = styled("div")(({ theme }) => ({
  marginBottom: '5vh',
  marginLeft: '2.5vh',
  marginRight: '2.5vh',
}));

const TitleFont = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  color: theme.palette.gray.main,
  marginTop: '5vh',
  marginLeft: '5vw',
}));

const mockProducts = [
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
  {
    name: ''
  },
]


export const SearchPage = () => {
  const { products } = useProductsStore();
  const { searchProducts } = useUiStore();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {
        (!searchProducts)
          ?
          <SearchPageContainer>
            {products.length === 0 || !products ? (
              <CardsContainer>
                <TitleFont variant="body2">
                  No product found
                </TitleFont>
              </CardsContainer>
            ) : (
              <CardsContainer>
                {products.map((e, i) => (
                  <SearchCardContainer key={i}>
                    <CardProduct product={e} />
                  </SearchCardContainer>
                ))}
              </CardsContainer>
            )}
            <Footer />
          </SearchPageContainer>
          :
          <SearchPageContainer>
            <CardsContainer>
              {
                mockProducts.map((e, i) => <SearchCardContainer key={i}>
                  <Stack spacing={1}>
                    <Skeleton
                      variant="rectangular"
                      width={(sm) ? "17.5ch" : "20ch"}
                      height="20ch"
                      animation="wave"
                    />
                  </Stack>
                </SearchCardContainer>
                )
              }
            </CardsContainer>
          </SearchPageContainer>
      }
    </>

  );
};
