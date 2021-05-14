import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useExpansionPanelsStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      padding: `${theme.spacing(2)}px 0`,
    },
    item: {
      marginBottom: theme.spacing(0.5),
    },
    primaryColor: {
      color: (props) => props.primaryColor || theme.palette.primary.main,
    },
    textColor: {
      color: (props) => props.primaryTextColor || theme.palette.text.primary,
    },
  }),
);
