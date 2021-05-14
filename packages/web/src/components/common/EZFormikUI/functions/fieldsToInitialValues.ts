/* eslint-disable no-confusing-arrow */
import * as moment from "moment";
import { FormikValues } from "formik";
import { FieldType } from "../types";

const isDateType = (field: FieldType) =>
  ["date", "time", "datetime"].includes(field.type);

const dateInitialValue = (val: FieldType["initialValue"]) =>
  moment.isMoment(val) || val instanceof Date || typeof val === "number"
    ? moment.default(val).format()
    : moment.default(Date.now()).format();

export default (fields: FieldType[]): FormikValues =>
  fields.reduce(
    (a, b) => ({
      ...a,
      [b.fieldName]: isDateType(b)
        ? dateInitialValue(b.initialValue)
        : b.initialValue,
    }),
    {}
  );
