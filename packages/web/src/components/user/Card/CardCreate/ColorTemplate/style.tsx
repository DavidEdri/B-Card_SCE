import { makeStyles, Theme } from "@material-ui/core/styles";

export const useColorTemplateStyles = makeStyles((theme: Theme) => ({
  root: {},
  optionsContainer: {
    flexWrap: "nowrap",
  },
  option: {
    display: "flex",
    flexWrap: "wrap",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 5,
    margin: 3,
    cursor: "pointer",
    "&.active": {
      borderColor: theme.palette.primary.main,
      "&>div": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      "&>div": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  quarter: {
    paddingTop: "50%",
    flex: "35%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
}));
