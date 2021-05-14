import * as Yup from "yup";
import { concatObjects } from "../../../functions";
import { requiredField } from "../../inputs";
import text from "../../text";

const background = Yup.object().shape({
  type: Yup.string()
    .oneOf(
      ["blank", "circuitBoard", "diamonds", "dots", "food", "stars"],
      "בחירה שגויה",
    )
    .required(text.requiredField),
});

export const createCard = Yup.object().shape({
  background,
  ...concatObjects(
    requiredField("handle"),
    requiredField("cardTitle"),
    requiredField("city"),
    requiredField("jobTitle"),
    requiredField("primaryColor"),
    requiredField("secondaryColor"),
    requiredField("textColor"),
  ),
});
