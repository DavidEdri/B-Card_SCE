import { CardPopulatedFields } from "@project/types";
import Axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../../../redux/actions/utilsActions";
import { setCard } from "../../../../redux/slices/card";
import EZFormikUI, { Fields, FormikSubmit } from "../../../common/EZFormikUI";
import { CardCreate } from "../CardCreate";
import { Buttons } from "./Buttons";
import { CardEditActionType } from "./CardEdit";

type Props = {
  actionType: CardEditActionType;
  cardValues: CardPopulatedFields;
};

type Key = Exclude<CardEditActionType, "cardSettings">;

const hidable = (initialValue: boolean): Fields[0] => ({
  fieldName: "isShown",
  type: "switch",
  label: "הצג אזור זה?",
  initialValue,
});

const titleField = (initialValue: string): Fields[0] => ({
  fieldName: "title",
  type: "text",
  options: "text",
  label: "כותרת",
  initialValue,
});

const textField = (initialValue: string): Fields[0] => ({
  fieldName: "text",
  type: "text",
  options: "text",
  label: "תאור",
  initialValue,
});

export const CardEditModal = ({ actionType, cardValues }: Props) => {
  const dispatch = useDispatch();
  const {
    about,
    actionText,
    buttons,
    expansionPanels,
    form,
    gallery,
    mainText,
    testimonials,
    vcf,
    mainAvatar,
    mainImage,
  } = cardValues;

  const onSubmit: FormikSubmit = async (values) => {
    try {
      let data: any;

      if (["mainAvatar", "mainImage"].includes(actionType)) data = values;
      else data = { [actionType]: values };

      const res = await Axios.put<CardPopulatedFields>("/users/cards/", data);
      dispatch(setCard(res.data));
      dispatch(closeDialog());
    } catch (error) {}
  };

  const fields: { [key in Key]: Fields } = {
    about: [
      titleField(about.title),
      {
        fieldName: "text",
        type: "textarea",
        label: "טקסט חופשי",
        rows: 3,
        initialValue: about.text,
      },
    ],
    actionText: [
      hidable(actionText.isShown),
      textField(actionText.text),
      {
        fieldName: "url",
        type: "text",
        options: "text",
        label: "קישור",
        initialValue: actionText.url,
      },
    ],
    buttons: [
      hidable(expansionPanels.isShown),
      {
        fieldName: "buttons",
        type: "other",
        label: "כפתור",
        component: Buttons,
        initialValue: buttons.buttons,
      },
    ],
    expansionPanels: [
      hidable(expansionPanels.isShown),
      {
        fieldName: "panels",
        type: "array",
        label: "טקסט חופשי",
        max: 3,
        of: [
          {
            fieldName: "title",
            type: "text",
            options: "text",
            label: "כותרת",
            initialValue: "",
          },
          {
            fieldName: "text",
            type: "textarea",
            label: "טקסט חופשי",
            rows: 3,
            initialValue: "",
          },
        ],
        initialValue: expansionPanels.panels,
      },
    ],
    form: [hidable(form.isShown), titleField(form.title)],
    gallery: [
      hidable(gallery.isShown),
      titleField(gallery.title),
      {
        fieldName: "images",
        type: "array",
        label: "תמונות",
        max: 5,
        of: [
          {
            fieldName: "src",
            type: "text",
            options: "text",
            label: "קישור לתמונה",
            initialValue: "",
          },
        ],
        initialValue: gallery.images,
      },
    ],
    mainAvatar: [
      {
        fieldName: "mainAvatar",
        type: "text",
        options: "text",
        label: "קישור לתמונה",
        initialValue: mainAvatar || "",
      },
    ],
    mainImage: [
      {
        fieldName: "mainImage",
        type: "text",
        options: "text",
        label: "קישור לתמונה",
        initialValue: mainImage || "",
      },
    ],
    mainText: [titleField(mainText.title), textField(mainText.text)],
    testimonials: [
      hidable(testimonials.isShown),
      titleField(testimonials.title),
      {
        fieldName: "data",
        type: "array",
        label: "המלצות",
        of: [
          {
            fieldName: "author",
            type: "text",
            options: "text",
            label: "שם הכותב",
            initialValue: "",
          },
          {
            fieldName: "text",
            type: "textarea",
            label: "טקסט ",
            rows: 3,
            initialValue: "",
          },
        ],
        initialValue: testimonials.data,
      },
    ],
    vcf: [
      hidable(vcf.isShown),
      {
        fieldName: "text",
        type: "text",
        options: "text",
        label: "כותרת",
        initialValue: vcf.text,
      },
    ],
  };

  if (actionType === "cardSettings") return <CardCreate card={cardValues} />;
  return <EZFormikUI fields={fields[actionType]} onSubmit={onSubmit} />;
};
