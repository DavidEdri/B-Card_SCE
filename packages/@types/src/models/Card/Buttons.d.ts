import { Hidable, PrimaryColors } from "./Common";

type BaseButton = { text: string };

type CallButton = BaseButton & {
  type: "call";
  number: string;
};

type LinkButton = BaseButton & {
  type: "link";
  url: string;
};

type NavigationButton = BaseButton & {
  type: "navigation";
  lat: number;
  lon: number;
};

type WhatsAppButton = BaseButton & {
  type: "whatsapp";
  number: string;
  message: string;
};

type Button = CallButton | WhatsAppButton | LinkButton | NavigationButton;

export type Buttons = Hidable &
  PrimaryColors & {
    buttons: Button[];
  };
