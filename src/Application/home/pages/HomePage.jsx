import { useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

import { BestProducts, Category } from "../../home";

import { useCategoriesStore, useProductsStore } from "../../../hooks";
import { Footer } from "../../ui";

export const HomePage = () => {
  const { categories } = useCategoriesStore();
  const { startLoadProductsByCategories } = useProductsStore();

  useEffect(() => {
    startLoadProductsByCategories();
  }, []);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box className="container_HomePage">
      <BestProducts />

      <Divider variant="middle" sx={{
        width: '100%',
        marginBottom: '20px',
        marginTop: '20px',
      }}/>

      {categories.map(
        (e, i) =>
          e.products.length !== 0 &&
          e.name !== "Preba" && <Category key={i} category={e} index={i} />
      )}

      <Footer />
    </Box>
  );
};
