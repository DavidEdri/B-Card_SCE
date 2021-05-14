import {
  ComponentBackgroundColor,
  PrimaryColors,
  SecondaryColors,
} from "@project/types";

export const extractPrimaryColors = (
  obj: PrimaryColors & { [key: string]: any },
): PrimaryColors => ({
  primaryColor: obj.primaryColor,
  primaryTextColor: obj.primaryTextColor,
});

export const extractSecondaryColors = (
  obj: SecondaryColors & { [key: string]: any },
): SecondaryColors => ({
  secondaryColor: obj.secondaryColor,
  secondaryTextColor: obj.secondaryColor,
});

export const extractBackgroundColor = (
  obj: ComponentBackgroundColor & { [key: string]: any },
): ComponentBackgroundColor => ({ backgroundColor: obj.backgroundColor });
