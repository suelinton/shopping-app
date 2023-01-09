import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ShoppingCartList } from "./ShoppingCartList";

export const ShoppingCart = (props) => {
  const cart = useCart();

  return (
    <>
      <Grid container justifyContent={"center"}>
        {cart.items.length === 0 && (
          <Typography variant="h5" gutterBottom>
            O seu carrinho está vazio
          </Typography>
        )}
        {cart.items.length > 0 && <ShoppingCartList />}
        <Grid xs={12}>
          <RouterLink to="/">Continuar comprando</RouterLink>
        </Grid>
      </Grid>
    </>
  );
};
