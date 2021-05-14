import { makeStyles, Theme } from "@material-ui/core/styles";
import { PrimaryColors } from "@project/types";

export const useCarouselStyles = makeStyles<Theme, PrimaryColors>(
  (theme: Theme) => ({
    root: {
      position: "relative",
    },
    dots: {
      display: "flex",
      padding: "10px 0",
      justifyContent: "center",
    },
    dot: {
      border: "none",
      width: 10,
      height: 10,
      background: "#c5c5c5",
      borderRadius: "50%",
      margin: "0 5px",
      padding: "5px",
      "&:focus": {
        outline: "none",
      },
      "&.active": {
        background: (props) => props.primaryColor || theme.palette.primary.main,
      },
      cursor: "pointer",
    },
    arrow: {
      width: "30px",
      height: "30px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      WebkitTransform: "translateY(-50%)",
      fill: (props) => props.primaryColor || theme.palette.primary.main,
      cursor: "pointer",
    },

    arrowRight: {
      left: "5px",
    },

    arrowLeft: {
      left: "auto",
      right: "5px",
    },

    arrowDisabled: {
      fill: "rgba(255, 255, 255, 0.5)",
    },
  }),
);
