import { makeStyles, Theme } from "@material-ui/core/styles";
import { ComponentBackgroundColor, PrimaryColors } from "@project/types";

export const useActionTextStyles = makeStyles<
  Theme,
  PrimaryColors & ComponentBackgroundColor
>((theme: Theme) => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },
  text: {
    textAlign: "center",
    color: (props) => props.primaryTextColor || theme.palette.primary.main,
  },
  icon: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    margin: "0 auto",
    backgroundColor: (props) =>
      props.backgroundColor || theme.palette.background.default,
    color: (props) => props.primaryColor || theme.palette.primary.main,
    padding: 5,
    "& svg": {
      height: "90%",
      width: "90%",
    },
    animation: "bounce 1.5s infinite",
  },
}));
