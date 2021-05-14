import { Hidable, PrimaryColors, SecondaryColors } from "./Common";

type Item = {
  author: string;
  text: string;
};

export type Testimonials = Hidable &
  PrimaryColors &
  SecondaryColors & {
    title: string;
    data: Item[];
  };
