import { useCart } from "../../../hooks/useCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";

export const CartIconButton = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <IconButton
      size="large"
      aria-label={
        items.length
          ? `Exibir carrinho com ${items.lenght} items`
          : "Carrinho vazio"
      }
      color="inherit"
      onClick={handleClick}
    >
      <Badge badgeContent={items.length} color="error">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};
