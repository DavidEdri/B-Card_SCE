import { makeStyles, Theme } from "@material-ui/core/styles";

export const useColorSelectStyles = makeStyles<Theme, { color: string }>(
  (theme: Theme) => ({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.5),
    },
    label: {
      flex: "0 0 30%",
    },
    picker: {
      height: 30,
      flexGrow: 1,
      margin: `0 ${theme.spacing(1)}px`,
      padding: theme.spacing(1),
      borderRadius: 3,
      backgroundColor: "#eee",
      "& :hover": {
        cursor: "pointer",
      },
    },
    color: {
      backgroundColor: (props) => props.color,
      width: "100%",
      height: "100%",
    },
  }),
);
