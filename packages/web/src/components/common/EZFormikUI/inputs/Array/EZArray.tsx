import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useField, FormikHelpers, FormikValues } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldType, TextObj } from "../../types";
import { inputSwitch, fieldsToInitialValues } from "../../functions";

type EZArrayProps = EZComponentBase & {
  setFieldValue: FormikHelpers<FormikValues>["setFieldValue"];
  of: FieldType[];
  startEmpty?: boolean;
  max?: number;
  newItemText?: string;
  text: TextObj;
  rowProps?: EZComponentBase["componentProps"];
};

export const EZArray: React.FC<EZArrayProps> = ({
  name,
  label,
  of,
  startEmpty = false,
  max = undefined,
  grid = initialGrid,
  setFieldValue,
  newItemText = undefined,
  text,
  rowProps,
  componentProps,
}) => {
  const [field] = useField({ name });
  const maxReached = max !== undefined && field.value.length >= max;
  const { helperText, disabled, ...other } = componentProps || {};

  const removeItem = (index: number) => {
    const tmp = [...field.value];
    tmp.splice(index, 1);
    setFieldValue(name, tmp);
  };

  const addItem = () => {
    const newRow = fieldsToInitialValues(of);

    setFieldValue(name, [...field.value, newRow]);
  };

  React.useEffect(() => {
    if (!startEmpty && field.value.length === 0) {
      addItem();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container item {...grid} {...other}>
      <Grid item xs={12}>
        <Typography>{label}</Typography>
      </Grid>
      {helperText && (
        <Grid item xs={12}>
          <Typography variant="caption">{helperText}</Typography>
        </Grid>
      )}
      {field.value.map((_: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box display="flex" key={index} style={{ width: "100%" }}>
          <Grid container item xs={12} {...rowProps}>
            {of.map((item, i) => {
              const fieldName = `${name}.${index}.${item.fieldName}`;
              return inputSwitch(
                { ...item, fieldName, props: { ...item.props, disabled } },
                i,
                setFieldValue,
                text,
              );
            })}
          </Grid>
          {!disabled && (
            <Button color="primary" onClick={() => removeItem(index)}>
              x
            </Button>
          )}
        </Box>
      ))}
      {!maxReached && !disabled && (
        <Grid item xs={12}>
          <Button color="primary" onClick={addItem}>
            {newItemText || text.addNewItem(label)}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
