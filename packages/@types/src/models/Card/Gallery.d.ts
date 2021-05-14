import { Hidable, PrimaryColors, ComponentBackgroundColor } from "./Common";

export type Gallery = Hidable &
  PrimaryColors &
  ComponentBackgroundColor & {
    title: string;
    images: { src: string }[];
  };
