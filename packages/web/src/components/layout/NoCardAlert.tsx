/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import { useHistory, useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useTypedSelector } from "../../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  alert: {
    alignItems: "center",
  },
  message: {
    padding: `${theme.spacing(1)}px 0`,
    flexGrow: 1,
  },
  clickHere: {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

export const NoCardAlert = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { isLoggedin, user } = useTypedSelector((state) => state.auth);
  const showAlert =
    isLoggedin &&
    user?.active &&
    !user?.gotCard &&
    location.pathname !== "/user/card/create";
  const [open, setOpen] = useState(showAlert);

  const closeAlert = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push("/user/card/create");
    closeAlert();
  };

  useEffect(() => {
    setOpen(showAlert);
  }, [showAlert]);

  return (
    <Container maxWidth={false} disableGutters>
      <>
        {open && (
          <div className={classes.root}>
            <Alert
              className={classes.alert}
              classes={{ message: classes.message }}
              severity="warning"
              action={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={closeAlert}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <div>נראה שטרם הגדרת את כרטיסך</div>
              <div>
                <span className={classes.clickHere} onClick={handleClick}>
                  לחץ כאן
                </span>
                <span> כדי לעשות זאת </span>
              </div>
            </Alert>
          </div>
        )}
      </>
    </Container>
  );
};
