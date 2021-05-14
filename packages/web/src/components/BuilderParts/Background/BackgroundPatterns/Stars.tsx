import { makeStyles, Theme } from "@material-ui/core/styles";
import { BackgroundItemProps } from "./BackgroundItem";
import { defaultPrimaryColor, defaultSecondaryColor } from "./defaults";

export default makeStyles<Theme, BackgroundItemProps>((theme) => ({
  root: {
    backgroundColor: (props) => props.primaryColor || defaultPrimaryColor,
    backgroundImage: (props) =>
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='${
        props.secondaryColor?.replace("#", "%23") || defaultSecondaryColor
      }' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
  },
}));
