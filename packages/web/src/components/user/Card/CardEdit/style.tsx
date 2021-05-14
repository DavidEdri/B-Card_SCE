import { makeStyles, Theme } from "@material-ui/core/styles";

export const useCardEditStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  },
}));
