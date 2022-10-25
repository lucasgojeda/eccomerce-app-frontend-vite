import { useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
    <div className="container_HomePage">
      <BestProducts />

      {categories.map(
        (e, i) =>
          e.products.length !== 0 &&
          e.name !== "Preba" && <Category key={i} category={e} index={i} />
      )}

      <Footer />
    </div>
  );
};
