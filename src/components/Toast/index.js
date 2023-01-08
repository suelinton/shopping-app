import { Alert, Slide, Snackbar } from "@mui/material";
import { useCart } from "../../hooks/useCart";

export const Toast = () => {
  const {
    isToastOpened: open,
    setIsToastOpened: setOpen,
    messageToast: message,
  } = useCart();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  };

  return (
    <Snackbar
      onClick={handleClose}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={TransitionUp}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
