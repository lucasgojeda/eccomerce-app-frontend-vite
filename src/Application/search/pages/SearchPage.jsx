/** Libraries */
import { styled } from "@mui/material/styles";

/** Components */
import { CardProduct } from "../../home";
import { Footer } from "../../ui";

/** Custom hooks */
import { useProductsStore } from "../../../hooks";

/** Material UI - Custom components */
const SearchPageContainer = styled("div")(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
}));

const CardsContainer = styled("div")(({ theme }) => ({
  width: '80%',
  minHeight: '30vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '15vh',
}));

const SearchCardContainer = styled("div")(({ theme }) => ({
  marginBottom: '5vh',
  marginLeft: '2.5vh',
  marginRight: '2.5vh',
}));

export const SearchPage = () => {
  const { products } = useProductsStore();

  return (
    <SearchPageContainer>
      {products.length === 0 || !products ? (
        <CardsContainer>
          <h3>No se ha encontrado ningún producto</h3>
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
  );
};
