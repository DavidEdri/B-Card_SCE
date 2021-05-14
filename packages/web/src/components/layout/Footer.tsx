import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: 100,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>{`Copyright © ${new Date().getFullYear()} B-Card `}</div>
    </footer>
  );
}
