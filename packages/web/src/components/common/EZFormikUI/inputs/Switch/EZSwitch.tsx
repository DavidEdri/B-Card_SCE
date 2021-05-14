import * as React from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase } from "../../types";
import style from "../style";

export const EZSwitch: React.FC<EZComponentBase> = ({
  name,
  label,
  componentProps,
  grid = initialGrid,
}) => {
  const [field] = useField({ name });
  const classes = style();

  return (
    <Grid item {...grid}>
      <Box className={classes.marginDense}>
        <FormControlLabel
          className={classes.label}
          control={
            <Switch
              checked={field.value}
              {...field}
              color="primary"
              {...componentProps}
            />
          }
          label={label}
          labelPlacement="start"
        />
      </Box>
    </Grid>
  );
};
