import * as React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldOption } from "../../types";

type RadioItemProps = EZComponentBase & {
  value: string;
};

const RadioItem: React.FC<RadioItemProps> = ({
  label,
  componentProps,
  ...props
}) => {
  const [field] = useField({ ...props, type: "radio" });

  return (
    <FormControlLabel
      {...field}
      label={label}
      control={<Radio {...componentProps} />}
      labelPlacement="start"
    />
  );
};

type EZRadioGroupProps = EZComponentBase & {
  options: FieldOption[];
};

export const EZRadio: React.FC<EZRadioGroupProps> = ({
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
        <RadioGroup row>
          {options.map((o) => (
            <RadioItem
              key={o.value}
              name={name}
              value={o.value}
              label={o.label}
              componentProps={componentProps}
            />
          ))}
        </RadioGroup>
        {isError && (
          <FormHelperText error variant="standard" style={{ fontSize: "16px" }}>
            {errorMsg}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};
