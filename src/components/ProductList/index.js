import Grid from "@mui/material/Unstable_Grid2";
import { Product } from "../Product";
import "./ProductList.style.css";

export const ProductList = (props) => {
  const { products } = props;

  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 10 }}>
      {products.map((product, index) => (
        <Grid md={2} key={index}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
