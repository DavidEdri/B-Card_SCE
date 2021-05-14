import { makeStyles, Theme } from "@material-ui/core/styles";
import { BackgroundItemProps } from "./BackgroundItem";
import { defaultPrimaryColor } from "./defaults";

export default makeStyles<Theme, BackgroundItemProps>((theme) => ({
  root: {
    backgroundColor: (props) => props.primaryColor || defaultPrimaryColor,
  },
}));
