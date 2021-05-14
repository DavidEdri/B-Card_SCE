import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useVcfStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    btn: (props) => ({
      backgroundColor: props.primaryTextColor || theme.palette.primary.main,
      color: props.primaryTextColor || theme.palette.secondary.main,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 700,
      "&:hover": {
        backgroundColor: props.primaryTextColor || theme.palette.primary.main,
        filter: "brightness(85%)",
      },
    }),
  }),
);
