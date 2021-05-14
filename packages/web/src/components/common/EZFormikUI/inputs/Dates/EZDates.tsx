import * as React from "react";
import * as moment from "moment";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useField } from "formik";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
  BaseDatePickerProps,
} from "@material-ui/pickers";
import { initialGrid } from "../../helpers";
import { EZComponentBase } from "../../types";
import style from "../style";

type EZDateProps = EZComponentBase & {
  setValue: (value: any) => void;
  type: "date" | "time" | "datetime";
};

export const EZDates: React.FC<EZDateProps> = ({
  name,
  label,
  setValue,
  type,
  componentProps,
  grid = initialGrid,
}) => {
  const [field, meta] = useField({ name });
  const classes = style();
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";

  //   if (isRTL) {
  //     moment.locale("he");
  //   }

  const onChange: BaseDatePickerProps["onYearChange"] = (date) =>
    setValue(date!.format());

  const typeToComponent = () => {
    switch (type) {
      case "date":
        return (
          <DatePicker
            value={field.value}
            onChange={onChange}
            {...componentProps}
          />
        );
      case "time":
        return (
          <TimePicker
            value={field.value}
            onChange={onChange}
            {...componentProps}
          />
        );
      case "datetime":
        return (
          <DateTimePicker
            value={field.value}
            onChange={onChange}
            {...componentProps}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Grid item {...grid}>
      <Box className={classes.marginDense}>
        <Box display="flex" alignItems="center">
          <Typography
            color={isError ? "error" : undefined}
            style={{ marginRight: 10 }}
          >
            {`${label}:`}
          </Typography>

          <MuiPickersUtilsProvider
            libInstance={moment.default}
            utils={MomentUtils}
            // locale={isRTL ? "he" : undefined}
          >
            {typeToComponent()}
          </MuiPickersUtilsProvider>
        </Box>
        <Typography color="error">{errorMsg}</Typography>
      </Box>
    </Grid>
  );
};
