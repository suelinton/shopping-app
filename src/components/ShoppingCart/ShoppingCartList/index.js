import { Button, ButtonGroup, Divider, Link, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { useCart } from "../../../hooks/useCart";

export const ShoppingCartList = () => {
  const cart = useCart();

  return (
    <Grid xs={12}>
      <Grid xs={12}>
        <Typography variant="h5" gutterBottom>
          Meu Carrinho
        </Typography>
      </Grid>
      {cart.items.map((item, index) => (
        <div key={index}>
          <Divider />
          <Grid container paddingTop={2} paddingBottom={2} alignItems="center">
            <Grid md={2}>
              <img src="https://picsum.photos/200" width={"50%"} />
            </Grid>
            <Grid md={4}>
              <Typography variant="h5" gutterBottom>
                {item.name}
              </Typography>
            </Grid>
            <Grid md={1}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => cart.handleRemoveItem(item.id)}>
                  -
                </Button>
                <Button variant="outlined">{item.quantity}</Button>
                <Button onClick={() => cart.handleAddItem(item)}>+</Button>
              </ButtonGroup>
              <Link
                component="button"
                variant="body2"
                onClick={() => cart.handleRemoveItem(item.id, item.quantity)}
              >
                Remover
              </Link>
            </Grid>
            <Grid md={2} justifyContent="flex-end">
              <Typography
                marginTop={2}
                gutterBottom
                variant="h5"
                component="div"
                className="price"
                textAlign={"end"}
              >
                ${item.quantity * item.price}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
                className="price"
                textAlign={"end"}
              >
                ${item.price} / un
              </Typography>
            </Grid>
          </Grid>
        </div>
      ))}
      <Divider />
      <Grid container justifyContent={"end"}>
        <h3>
          Total: $
          {cart.items.reduce(
            (total, item) =>
              (
                Number(total) +
                Number(item.price) * Number(item.quantity)
              ).toFixed(2),
            0
          )}
        </h3>
      </Grid>
    </Grid>
  );
};
