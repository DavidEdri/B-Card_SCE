import * as React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldOption } from "../../types";

type CheckboxItemProps = EZComponentBase & {
  value: string;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  componentProps,
  ...props
}) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <FormControlLabel
      {...field}
      label={label}
      control={<Checkbox {...componentProps} />}
      labelPlacement="start"
    />
  );
};

type EZCheckboxGroupProps = EZComponentBase & {
  options: FieldOption[];
};

export const EZCheckbox: React.FC<EZCheckboxGroupProps> = ({
  name,
  options,
  label,
  componentProps,
  grid = initialGrid,
}) => {
  const [, meta] = useField({ name });
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";

  return (
    <Grid item {...grid}>
      <FormControl fullWidth margin="dense">
        <FormLabel error={isError}>{label}</FormLabel>
        <FormGroup row>
          {options.map((o) => (
            <CheckboxItem
              key={o.value}
              name={name}
              value={o.value}
              label={o.label}
              componentProps={componentProps}
            />
          ))}
        </FormGroup>
        {isError && (
          <FormHelperText error variant="standard" style={{ fontSize: "16px" }}>
            {errorMsg}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};
