import { makeStyles, Theme } from "@material-ui/core/styles";

export const useMainAvatarStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: -60,
    marginBottom: -60,
    zIndex: 0,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    background: "white",
    boxShadow: theme.shadows[4],
  },
}));
