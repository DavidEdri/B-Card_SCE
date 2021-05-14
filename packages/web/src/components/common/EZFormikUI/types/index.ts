export * from "./FieldTypes";
export * from "./InputGrid";
export * from "./BaseTypes";

export type SubmitMethods = "get" | "delete" | "put" | "patch" | "post";

export type TextObj = {
  addNewItem: (label: string) => string;
  checkCaptcha: string;
  submit: string;
  selectEmpty: string;
};
