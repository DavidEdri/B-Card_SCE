import { ComponentBackgroundColor, Hidable, PrimaryColors } from "./Common";

export type ActionText = Hidable &
  PrimaryColors &
  ComponentBackgroundColor & {
    text: string;
    url: string;
  };
