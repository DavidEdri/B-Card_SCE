import { makeStyles, Theme } from "@material-ui/core/styles";

export const useFormStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  card: {
    width: "100%",
    margin: 10,
    padding: 10,
  },
}));
