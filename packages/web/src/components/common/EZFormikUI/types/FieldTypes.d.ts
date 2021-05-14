import { MomentInput } from "moment";
import { FieldItemBase, FieldOption, FieldHTMLType } from "./BaseTypes";
import { OtherComponentProps } from "../inputs/Other";

type EZArray = FieldItemBase & {
  type: "array";
  initialValue: { [key: string]: any }[] | [];
  of: (FieldType & { type: Exclude<FieldType["type"], "array"> })[];
  max?: number;
  startEmpty?: boolean;
  newItemText?: string;
  rowProps?: FieldItemBase["props"];
};

type EZAutocomplete = FieldItemBase & {
  type: "autocomplete";
  options: FieldOption[];
  initialValue: any;
};

type EZCheckboxField = FieldItemBase & {
  type: "checkbox";
  options: FieldOption[];
  initialValue: string[];
};

type EZDatesField = FieldItemBase & {
  type: "date" | "time" | "datetime";
  initialValue?: MomentInput;
};

type EZOther = FieldItemBase & {
  type: "other";
  initialValue: any;
  component: OtherComponentProps;
};

type EZRadioField = FieldItemBase & {
  type: "radio";
  options: FieldOption[];
  initialValue: string;
};

type EZSelectField = FieldItemBase & {
  type: "select";
  options: FieldOption[];
  initialValue: any;
  isMulti?: boolean;
  emptyItemText?: string;
};

type EZSwitchField = FieldItemBase & {
  type: "switch";
  initialValue: boolean;
};

type EZTextAreaField = FieldItemBase & {
  type: "textarea";
  rows: number;
  rowsMax?: number;
  initialValue: string;
};

type EZTextFieldField = FieldItemBase & {
  type: "text";
  options: FieldHTMLType;
  initialValue: string | number | Date;
};

export type FieldType =
  | EZTextFieldField
  | EZTextAreaField
  | EZRadioField
  | EZCheckboxField
  | EZSelectField
  | EZSwitchField
  | EZDatesField
  | EZAutocomplete
  | EZOther
  | EZArray;
