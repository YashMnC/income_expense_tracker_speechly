import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./styles";
import { KeyboardReturnOutlined } from "@material-ui/icons";

const CustomizedSnackbar = ({ open, setOpen, severity, snackbarText }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={severity}
          elevation={6}
          variant="filled"
        >
          {snackbarText}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
