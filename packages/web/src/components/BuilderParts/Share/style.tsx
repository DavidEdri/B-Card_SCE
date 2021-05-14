import { makeStyles, Theme } from "@material-ui/core/styles";

export const useShareStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    padding: 10,
    margin: `0 ${theme.spacing(1)}px`,
    "& svg": {
      height: "90%",
      width: "90%",
    },
    color: "#fff",
  },
  fb: {
    backgroundColor: "#3C589A",
  },
  wa: {
    backgroundColor: "#55EB4C",
  },
  txt: {
    backgroundColor: "#F89406",
  },
}));
