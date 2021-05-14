import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useTestimonialsStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      padding: `${theme.spacing(2)}px 0`,
    },
    itemText: {
      marginBottom: theme.spacing(2),
      textAlign: "center",
      color: (props) => props.primaryTextColor || theme.palette.text.primary,
    },
    itemAuthor: {
      color: (props) => props.primaryColor || theme.palette.primary.main,
      textAlign: "center",
    },
  }),
);
