import * as React from "react";
import { FormikHelpers, FormikValues } from "formik";
import { FieldType, TextObj } from "../types";
import {
  EZTextField,
  EZTextArea,
  EZRadio,
  EZCheckbox,
  EZSelect,
  EZSwitch,
  EZDates,
  EZAutoComplete,
  EZOther,
} from "../inputs";

export default (
  field: FieldType,
  i: number,
  setFieldValue: FormikHelpers<FormikValues>["setFieldValue"],
  text: TextObj,
) => {
  switch (field.type) {
    case "text":
      return (
        <EZTextField
          key={field.fieldName}
          name={field.fieldName}
          type={field.options}
          label={field.label}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "textarea":
      return (
        <EZTextArea
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          rows={field.rows}
          rowsMax={field.rowsMax || 999}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "radio":
      return (
        <EZRadio
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          options={field.options}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "checkbox":
      return (
        <EZCheckbox
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          options={field.options}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "select":
      return (
        <EZSelect
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          options={field.options}
          isMulti={field.isMulti}
          emptyItemText={field.emptyItemText || text.selectEmpty}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "switch":
      return (
        <EZSwitch
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "date":
    case "time":
    case "datetime":
      return (
        <EZDates
          type={field.type}
          key={field.fieldName}
          name={field.fieldName}
          setValue={(value) => setFieldValue(field.fieldName, value)}
          label={field.label}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "autocomplete":
      return (
        <EZAutoComplete
          key={field.fieldName}
          name={field.fieldName}
          label={field.label}
          options={field.options}
          initialValue={field.initialValue}
          setValue={(value) => setFieldValue(field.fieldName, value)}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    case "other":
      return (
        <EZOther
          key={field.fieldName}
          name={field.fieldName}
          component={field.component}
          label={field.label}
          setValue={(value) => setFieldValue(field.fieldName, value)}
          grid={field.grid}
          componentProps={field.props}
        />
      );

    default:
      return <React.Fragment key={i} />;
  }
};
