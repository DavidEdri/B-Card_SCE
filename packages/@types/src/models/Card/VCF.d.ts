import { Hidable, PrimaryColors } from "./Common";

export type VCF = Hidable &
  PrimaryColors & {
    url: string;
    text: string;
  };
