import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { CartIconButton } from "../CartIconButton";

export const MobileMenu = ({
  mobileMenuId,
  mobileMoreAnchorEl,
  setMobileMoreAnchorEl,
}) => {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CartIconButton />
        <p>Carrinho</p>
      </MenuItem>
    </Menu>
  );
};
