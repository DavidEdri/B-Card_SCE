import { PrimaryColors, SecondaryColors } from "./Common";

export type MainText = PrimaryColors &
  SecondaryColors & {
    title: string;
    text: string;
  };
