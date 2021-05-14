import { useState, useEffect } from "react";
import { CardFields } from "@project/types";
import {
  Blank,
  CircuitBoard,
  Diamonds,
  Dots,
  Food,
  Stars,
} from "../components/BuilderParts/Background/BackgroundPatterns";
import { BackgroundItemProps } from "../components/BuilderParts/Background/BackgroundPatterns/BackgroundItem";

export const useBackgroundStyle = (
  type: CardFields["background"]["type"],
  colors: BackgroundItemProps = {
    primaryColor: undefined,
    secondaryColor: undefined,
  },
) => {
  const blankBG = Blank(colors);
  const circuitBG = CircuitBoard(colors);
  const diamondsBG = Diamonds(colors);
  const dotsBG = Dots(colors);
  const foodBG = Food(colors);
  const starsBG = Stars(colors);
  const [background, setBackground] = useState(blankBG.root);

  useEffect(() => {
    switch (type) {
      case "circuitBoard":
        setBackground(circuitBG.root);
        break;
      case "diamonds":
        setBackground(diamondsBG.root);
        break;

      case "dots":
        setBackground(dotsBG.root);
        break;
      case "food":
        setBackground(foodBG.root);
        break;
      case "stars":
        setBackground(starsBG.root);
        break;
      default:
        setBackground(blankBG.root);
    }
  }, [
    blankBG.root,
    circuitBG.root,
    diamondsBG.root,
    dotsBG.root,
    foodBG.root,
    starsBG.root,
    type,
  ]);

  return background;
};
