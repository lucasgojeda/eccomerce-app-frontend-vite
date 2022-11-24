/** Libraries */
import { Divider } from "@mui/material";

import { styled } from "@mui/material/styles";

/** Components */
import { BestProducts, Category } from "../../home";
import { Footer } from "../../ui";

/** Custom hooks */
import { useCategoriesStore } from "../../../hooks";

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

/** Mock data */
const skeletonArray = [
  {
    name: "",
    products: [],
  },
  {
    name: "",
    products: [],
  },
  {
    name: "",
    products: [],
  },
];

export const HomePage = () => {
  const { categories } = useCategoriesStore();

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

      {categories.length !== 0 ? (
        <>
          {categories.map(
            (e, i) =>
              e.products.length !== 0 &&
              e.name !== "Preba" && <Category key={i} category={e} />
          )}
        </>
      ) : (
        <>
          {skeletonArray.map((e, i) => (
            <Category key={i} category={e} />
          ))}
        </>
      )}

      <Footer />
    </HomeContainer>
  );
};
