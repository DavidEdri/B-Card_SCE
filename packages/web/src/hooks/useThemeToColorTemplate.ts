import { useTheme } from "@material-ui/core";

export type ColorTemplateValue = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
};

export default (): ColorTemplateValue => {
  const theme = useTheme();
  const { primary, secondary, background, text } = theme.palette;

  return {
    primary: primary.main,
    secondary: secondary.main,
    text: text.primary,
    background: background.default,
  };
};
