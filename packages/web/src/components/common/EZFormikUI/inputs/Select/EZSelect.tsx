import * as React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldOption } from "../../types";

type EZSelectProps = EZComponentBase & {
  options: FieldOption[];
  isMulti?: boolean;
  emptyItemText: string;
};

export const EZSelect: React.FC<EZSelectProps> = ({
  name,
  options,
  isMulti = false,
  label,
  emptyItemText,
  componentProps,
  grid = initialGrid,
}) => {
  const [field, meta] = useField({ name });
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";
  const helperText = componentProps?.helperText;

  return (
    <Grid item {...grid}>
      <FormControl component="fieldset" fullWidth margin="dense">
        <InputLabel error={isError}>{label}</InputLabel>
        <Select
          type="select"
          multiple={isMulti}
          fullWidth
          {...field}
          // {...componentProps}
        >
          {!isMulti && (
            <MenuItem value="">
              <em>{emptyItemText}</em>
            </MenuItem>
          )}

          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
        {isError && (
          <FormHelperText
            error
            variant="standard"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            {errorMsg}
          </FormHelperText>
        )}
        {helperText && (
          <FormHelperText
            variant="standard"
            style={{ fontSize: "14px", marginBottom: "10px" }}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};
