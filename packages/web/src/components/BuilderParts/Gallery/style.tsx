/* eslint-disable no-bitwise */
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ComponentBackgroundColor, PrimaryColors } from "@project/types";

const increaseBrightness = (hex: string, percent: number) => {
  hex = hex.replace(/^\s*#|\s*$/g, "");

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return `#${(0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
    .toString(16)
    .substr(1)}${(0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
    .toString(16)
    .substr(1)}${(0 | ((1 << 8) + b + ((256 - b) * percent) / 100))
    .toString(16)
    .substr(1)}`;
};

export const useGalleryStyles = makeStyles<
  Theme,
  ComponentBackgroundColor & PrimaryColors
>((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundImage: (props) => {
      const color = props.backgroundColor || theme.palette.primary.main;
      return `linear-gradient(120deg, ${color} 0%, ${increaseBrightness(
        color,
        20,
      )} 100%)`;
    },
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
  gridList: {
    transform: "translateZ(0)",
  },
  title: {
    color: (props) => props.primaryColor || theme.palette.secondary.main,
  },
}));
