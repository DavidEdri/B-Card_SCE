import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useAboutStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      padding: `${theme.spacing(2)}px 0`,
    },
    title: {
      textAlign: "center",
      color: (props) => props.primaryColor || theme.palette.primary.main,
    },
    text: {
      textAlign: "center",
      color: (props) => props.primaryTextColor || theme.palette.text.primary,
    },
  }),
);
