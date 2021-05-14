import { makeStyles, Theme } from "@material-ui/core/styles";

export const useMainImageStyles = makeStyles<Theme, { url: string }>(
  (theme: Theme) => ({
    root: {
      height: "33vh",
      width: "100%",
      backgroundImage: (props) => `url(${props.url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderBottomLeftRadius: "40% 5%",
      borderBottomRightRadius: "40% 5%",
    },
  }),
);
