import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useMainTextStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {},
    title: {
      color: (props) => props.primaryColor || theme.palette.primary.main,
      textAlign: "center",
    },
    text: {
      color: (props) => props.primaryTextColor || theme.palette.text.primary,
      textAlign: "center",
    },
  }),
);
