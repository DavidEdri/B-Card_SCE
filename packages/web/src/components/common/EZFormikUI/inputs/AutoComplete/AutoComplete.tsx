/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldOption } from "../../types";

type EZAutoCompleteProps = EZComponentBase & {
  options: FieldOption[];
  setValue: (value: any) => void;
  initialValue: any;
};

export const EZAutoComplete: React.FC<EZAutoCompleteProps> = ({
  initialValue,
  setValue,
  componentProps,
  grid = initialGrid,
  ...props
}) => {
  const [init, setInit] =
    React.useState<{ value: any; label: string } | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const [field, meta] = useField(props);
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";
  const { options } = props;

  React.useEffect(() => {
    const t = options.find((o) => o.value === field.value);

    setInit(t);
    setLoading(false);
  }, []);

  if (loading) return <></>; // calc default val before initializing (need to find better solution)

  return (
    <Grid item {...grid}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        onChange={(e, newVal) =>
          setValue(newVal && typeof newVal !== "string" ? newVal.value : "")
        }
        defaultValue={init}
        renderInput={(params) => (
          <TextField
            {...props}
            {...field}
            {...params}
            helperText={errorMsg}
            error={isError}
            margin="dense"
            fullWidth
          />
        )}
        {...componentProps}
      />
    </Grid>
  );
};
