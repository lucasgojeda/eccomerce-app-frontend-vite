import { Box, Typography } from "@mui/material";
import { useProductsStore } from "../../../../hooks";

import { CardProduct } from "../../../home";

export const BestProducts = () => {
  const { products } = useProductsStore();

  return (
    <div className="container_BestProducts">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "5vh",
        }}
      >
        <Typography variant="body2" fontSize={18} color="#707B7C">
          Lo más vendido
        </Typography>
      </Box>

      <div className="container_cards">
        {products.map((e, i) => i < 3 && <CardProduct key={i} product={e} />)}
      </div>
    </div>
  );
};
