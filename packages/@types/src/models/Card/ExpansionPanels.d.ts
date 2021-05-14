import { Hidable, PrimaryColors } from "./Common";

type Panel = {
  title: string;
  text: string;
};

export type ExpansionPanels = Hidable &
  PrimaryColors & {
    panels: Panel[];
  };
