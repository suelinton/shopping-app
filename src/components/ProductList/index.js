import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useCart } from "../../hooks/useCart";
import { Product } from "../Product";
import "./ProductList.style.css";

export const ProductList = (props) => {
  const { products } = props;
  const { handleAddItem } = useCart();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid xs={2} key={index}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
