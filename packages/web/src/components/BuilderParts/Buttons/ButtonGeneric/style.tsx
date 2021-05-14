import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useButtonGenericStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      textDecoration: "none",
      color: (props) => props.primaryTextColor || "inherit",
    },
    icon: {
      color: (props) => props.primaryColor || theme.palette.primary.main,
      height: theme.spacing(5),
      width: theme.spacing(5),
      backgroundColor: "rgba(0,0,0,0)",
      border: (props) =>
        `2px solid ${props.primaryColor || theme.palette.primary.main}`,
      padding: 5,
      "& svg": {
        height: "90%",
        width: "90%",
      },
    },
    text: {
      textAlign: "center",
      color: theme.palette.text.primary,
    },
  }),
);
