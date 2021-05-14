import { CardFields } from "@project/types";
import Blank from "./Blank";
import CircuitBoard from "./CircuitBoard";
import Diamonds from "./Diamonds";
import Dots from "./Dots";
import Food from "./Food";
import Stars from "./Stars";

const backgroundTypes: CardFields["background"]["type"][] = [
  "blank",
  "circuitBoard",
  "diamonds",
  "dots",
  "food",
  "stars",
];

export { backgroundTypes, Blank, CircuitBoard, Diamonds, Dots, Food, Stars };
