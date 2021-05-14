import { Hidable, PrimaryColors } from "./Common";

export type About = Hidable &
  PrimaryColors & {
    title: string;
    text: string;
  };
