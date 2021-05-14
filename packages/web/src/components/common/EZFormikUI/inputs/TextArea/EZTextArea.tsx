import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase } from "../../types";

type EZTextAreaProps = EZComponentBase & {
  rows: number;
  rowsMax?: number;
};

export const EZTextArea: React.FC<EZTextAreaProps> = ({
  componentProps,
  grid = initialGrid,
  rows,
  rowsMax,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";
  const { label } = props;

  return (
    <Grid item {...grid}>
      <TextField
        {...field}
        {...props}
        helperText={errorMsg}
        multiline
        rows={rows}
        rowsMax={rowsMax}
        placeholder={label}
        fullWidth
        error={isError}
        margin="dense"
        {...componentProps}
      />
    </Grid>
  );
};
