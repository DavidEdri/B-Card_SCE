import { Grid } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { useBackgroundStyle } from "../../hooks";
import { useTypedSelector } from "../../redux";
import { About } from "../BuilderParts/About";
import { ActionText } from "../BuilderParts/ActionText";
import { Buttons } from "../BuilderParts/Buttons";
import { ExpansionPanels } from "../BuilderParts/ExpansionPanels";
import { Form } from "../BuilderParts/Form";
import { Gallery } from "../BuilderParts/Gallery";
import { MainAvatar } from "../BuilderParts/MainAvatar";
import { MainImage } from "../BuilderParts/MainImage";
import { MainText } from "../BuilderParts/MainText";
import { Share } from "../BuilderParts/Share";
import { Testimonials } from "../BuilderParts/Testimonials";
import { Vcf } from "../BuilderParts/VCF";

export const CardContainer = () => {
  const card = useTypedSelector(
    (state) => state.card.data,
  ) as CardPopulatedFields;
  const {
    background,
    about,
    actionText,
    buttons,
    mainText,
    expansionPanels,
    form,
    gallery,
    testimonials,
    mainAvatar,
    mainImage,
    vcf,
  } = card;
  const backgroundClass = useBackgroundStyle(background.type, {
    primaryColor: background.primaryColor,
    secondaryColor: background.secondaryColor,
  });

  return (
    <Grid
      item
      xs={12}
      className={backgroundClass}
      style={{ minHeight: "100vh" }}
    >
      <MainImage url={mainImage} />
      <MainAvatar url={mainAvatar} />
      <MainText data={mainText} />
      {buttons.isShown && <Buttons data={buttons} />}
      {about.isShown && <About data={about} />}
      {actionText.isShown && <ActionText data={actionText} />}
      {expansionPanels.isShown && <ExpansionPanels data={expansionPanels} />}
      {vcf.isShown && <Vcf data={vcf} />}
      {gallery.isShown && <Gallery data={gallery} />}
      {testimonials.isShown && <Testimonials data={testimonials} />}
      {form.isShown && <Form data={form} cardID={card._id} />}
      <Share cardHandle={card.handle} />
    </Grid>
  );
};
