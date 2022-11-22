/** Libraries */
import { useEffect } from "react";

import { Divider } from "@mui/material";

import { styled } from "@mui/material/styles";

/** Components */
import { BestProducts, Category } from "../../home";
import { Footer } from "../../ui";

/** Custom hooks */
import { useCategoriesStore, useProductsStore } from "../../../hooks";

/** Material UI - Custom components */
const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  left: "0",
  top: "0",
  zIndex: "-1",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#fff",
}));

export const HomePage = () => {
  const { categories } = useCategoriesStore();
  const { startLoadProductsByCategories } = useProductsStore();

  useEffect(() => {
    startLoadProductsByCategories();
  }, []);

  return (
    <HomeContainer>
      <BestProducts />

      <Divider
        variant="middle"
        sx={{
          width: "100%",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />

      {categories.map(
        (e, i) =>
          e.products.length !== 0 &&
          e.name !== "Preba" && <Category key={i} category={e} />
      )}

      <Footer />
    </HomeContainer>
  );
};
