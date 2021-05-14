import config from "../config";
import { TextObj } from "../types";

export const changeText = (textObj: TextObj) => {
  config.text = textObj;
};

export const setCaptchaKey = (key: string) => {
  config.captchaKey = key;
};
