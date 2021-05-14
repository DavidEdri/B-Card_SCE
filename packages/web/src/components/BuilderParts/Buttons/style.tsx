import { makeStyles, Theme } from "@material-ui/core/styles";

export const useButtonsStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },
}));
