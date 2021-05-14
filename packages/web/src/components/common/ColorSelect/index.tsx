/* eslint-disable no-spaced-func */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box, Typography, Popper, ClickAwayListener } from "@material-ui/core";
import React, { useState } from "react";
import { SketchPicker, ColorChangeHandler } from "react-color";
import { useColorSelectStyles } from "./style";

const presetColors = [
  "#f4f4df",
  "#f4e9df",
  "#f4dfe0",
  "#f4dfea",
  "#ffdab9",
  "#ffe3e5",
  "#ffa2ab",
  "#ff4557",
  "#ff2b40",
  "#fdd450",
  "#b3c0e2",
  "#222f5b",
  "#946b2d",
  "#6497b1",
  "#99dd44",
  "#fad981",
  "#fafc9a",
  "#fff68f",
  "#ffb6c1",
  "#a4d0ff",
  "#f8f493",
  "#fff2b3",
  "#ff759c",
  "#ffb45a",
  "#ffc1b2",
  "#063c75",
  "#cfecde",
  "#c8c35c",
  "#85e86f",
  "#1c8c44",
  "#53ff43",
  "#35b899",
  "#ff9478",
  "#ffdb00",
  "#ffbd00",
  "#dfeaf4",
  "#a6e56f",
  "#ff6666",
  "#63a194",
];

type ColorSelectProps = {
  label: string;
  value: string;
  setValue: (newVal: string) => void;
  errorMsg?: string;
};

export const ColorSelect = ({
  value,
  setValue,
  label,
  errorMsg,
}: ColorSelectProps) => {
  const classes = useColorSelectStyles({ color: value });
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLDivElement) | null
  >(null);
  const isError = !!errorMsg;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const handleChange: ColorChangeHandler = (color) => {
    setValue(color.hex);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.label} variant="body1" color="primary">
          {label}
        </Typography>
        <div className={classes.picker} onClick={handleClick}>
          <div className={classes.color} />
        </div>
      </Box>
      {isError && (
        <Typography variant="body1" color="error">
          {errorMsg}
        </Typography>
      )}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <SketchPicker
            presetColors={presetColors}
            disableAlpha
            color={value}
            onChange={handleChange}
          />
        </ClickAwayListener>
      </Popper>
    </div>
  );
};
