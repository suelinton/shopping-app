import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Product.style.css";
import { ButtonShowMedia } from "../ButtonShowMedia";
import { useCart } from "../../hooks/useCart";

export const Product = ({ product }) => {
  const { name, price } = product;
  const { handleAddItem } = useCart();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <ButtonShowMedia
        image={{
          url: "https://picsum.photos/200",
          title: name,
          width: "100%",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography
          marginTop={2}
          gutterBottom
          variant="h5"
          component="div"
          className="price"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            component="span"
            mr={1}
          >
            Por:
          </Typography>
          ${price}
        </Typography>
      </CardContent>
      <CardActions xs={12}>
        <Button
          xs={12}
          variant="outlined"
          endIcon={<AddShoppingCartIcon />}
          onClick={() => handleAddItem(product)}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
};
