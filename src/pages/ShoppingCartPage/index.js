import { ShoppingCart } from "../../components/ShoppingCart";
import { CartToolbar } from "./CartToolbar";
import Grid from "@mui/material/Unstable_Grid2";

export const ShoppingCartPage = () => {
  return (
    <>
      <CartToolbar />
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 10 }}
        sx={{ pt: 0, pl: 10, pr: 10, pb: 10 }}
        rowSpacing={2}
      >
        <Grid xs={12}>
          <ShoppingCart />
        </Grid>
      </Grid>
    </>
  );
};
