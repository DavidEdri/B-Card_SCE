import { RequestHandler } from "express";
import { validation, constants } from "@project/common";
import { omit, pick } from "lodash";
import { functions as utilsFunctions } from "../../../utils";
import Card from "../../../models/Card";
import { cardTemplate } from "./template";
import User from "../../../models/User";

const { errorHandler } = utilsFunctions;
const { text } = constants;

const get: RequestHandler = async (req, res) => {
  const owner = req.user!._id;

  try {
    const cardRecord = await Card.findOnePopulated({ owner });

    if (!cardRecord) return res.status(400).json("user don't have a card");

    return res.status(200).json(cardRecord);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

const create: RequestHandler = async (req, res) => {
  const user = req.user!;
  const data = pick(req.body, [
    "handle",
    "cardTitle",
    "city",
    "jobTitle",
    "primaryColor",
    "secondaryColor",
    "textColor",
    "background",
  ]);

  try {
    await validation.users.createCard.validate(data, { abortEarly: false });

    const isHandleAvailable = await Card.isHandleAvailable(data.handle);

    if (!isHandleAvailable)
      return res.status(400).json({ handle: "קישור כבר בשימוש" });

    const userRecord = await User.findById(user._id);

    if (!userRecord) return res.status(500).json({ msg: text.serverError });

    const newCard = new Card({
      ...cardTemplate(data.cardTitle),
      ...omit(data, ["cardTitle"]),
      owner: user._id,
    });
    await newCard.save();

    userRecord.gotCard = true;
    userRecord.cardHandle = data.handle;
    await userRecord.save();

    return res.status(200).json(newCard);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

const delCard: RequestHandler = async (req, res) => {
  const owner = req.user!._id;

  try {
    const result = await Card.deleteOne({ owner });
    if (!result.n) return res.status(400).json({ msg: text.serverError });

    const userRecord = await User.findById(owner);
    if (!userRecord) return res.status(400).json({ msg: text.serverError });

    userRecord.gotCard = false;
    userRecord.cardHandle = undefined;
    await userRecord.save();

    return res.status(200).json(result);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

const editCardSettings: RequestHandler = async (req, res) => {
  const owner = req.user!._id;
  const { id } = req.params;
  const data = pick(req.body, [
    "handle",
    "cardTitle",
    "city",
    "jobTitle",
    "primaryColor",
    "secondaryColor",
    "textColor",
    "background",
  ]);

  try {
    const cardRecord = await Card.findOne({ owner, _id: id });
    if (!cardRecord) return res.status(400).json({ msg: text.serverError });

    const userRecord = await User.findById(owner);
    if (!userRecord) return res.status(400).json({ msg: text.serverError });

    userRecord.cardHandle = data.handle;
    await userRecord.save();

    cardRecord.handle = data.handle;
    cardRecord.city = data.city;
    cardRecord.jobTitle = data.jobTitle;
    cardRecord.primaryColor = data.primaryColor;
    cardRecord.secondaryColor = data.secondaryColor;
    cardRecord.textColor = data.textColor;
    cardRecord.background = data.background;
    cardRecord.mainText.title = data.cardTitle;

    await cardRecord.save();

    const populated = await Card.findById(cardRecord._id);
    if (!populated) return res.status(400).json({ msg: text.serverError });

    return res.status(200).json(populated);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

const editCard: RequestHandler = async (req, res) => {
  const owner = req.user!._id;
  const data = pick(req.body, [
    "about",
    "actionText",
    "background",
    "buttons",
    "expansionPanels",
    "form",
    "gallery",
    "mainText",
    "testimonials",
    "vcf",
    "mainAvatar",
    "mainImage",
  ]);

  try {
    const cardRecord = await Card.findOne({ owner });
    if (!cardRecord) return res.status(400).json({ msg: text.serverError });

    cardRecord.about = data.about || cardRecord.about;
    cardRecord.actionText = data.actionText || cardRecord.actionText;
    cardRecord.background = data.background || cardRecord.background;
    cardRecord.buttons = data.buttons || cardRecord.buttons;
    cardRecord.expansionPanels =
      data.expansionPanels || cardRecord.expansionPanels;
    cardRecord.form = data.form || cardRecord.form;
    cardRecord.gallery = data.gallery || cardRecord.gallery;
    cardRecord.mainText = data.mainText || cardRecord.mainText;
    cardRecord.testimonials = data.testimonials || cardRecord.testimonials;
    cardRecord.vcf = data.vcf ? { ...data.vcf, url: "#" } : cardRecord.vcf;
    cardRecord.mainAvatar = data.mainAvatar || cardRecord.mainAvatar;
    cardRecord.mainImage = data.mainImage || cardRecord.mainImage;

    await cardRecord.save();

    const populated = await Card.findById(cardRecord._id);
    if (!populated) return res.status(400).json({ msg: text.serverError });

    return res.status(200).json(populated);
  } catch (error) {
    const { json, status } = errorHandler(error, req);
    return res.status(status).json(json);
  }
};

export default { create, get, delCard, editCard, editCardSettings };
