import * as React from "react";
import { InputGrid } from "./InputGrid";

type ComponentProps = {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  helperText?: string;
  [key: string]: any;
};

export type EZComponentBase = {
  name: string;
  label: string;
  componentProps?: ComponentProps;
  grid?: InputGrid;
  key: string | number;
};

export type FieldItemBase = {
  fieldName: string;
  label: string;
  props?: ComponentProps;
  grid?: InputGrid;
};

export type FieldOption = { value: any; label: string };

export type FieldHTMLType = "email" | "password" | "number" | "tel" | "text";
