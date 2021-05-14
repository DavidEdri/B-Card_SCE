/* eslint-disable import/no-cycle */
import { Query } from "mongoose";
import {
  CardDocument,
  CardPopulatedDocument,
  CardModel,
  FindParameters,
} from "./Document";

const populateFields = ["owner jobTitle city", "-password"];

const findPopulated = async function (
  this: CardModel,
  args: FindParameters,
): Promise<Query<CardPopulatedDocument[], CardDocument>> {
  const Card = this;
  return Card.find(args).populate(populateFields[0], populateFields[1]) as any;
};

const findOnePopulated = async function (
  this: CardModel,
  args: CardModel["findOne"],
): Promise<Query<CardPopulatedDocument | null, CardDocument>> {
  const Card = this;
  return Card.findOne(args).populate(
    populateFields[0],
    populateFields[1],
  ) as any;
};

const isHandleAvailable = async function (this: CardModel, handle: string) {
  const Card = this;
  const taken = await Card.findOne({ handle });

  return !taken;
};

export const statics = {
  findPopulated,
  findOnePopulated,
  isHandleAvailable,
};
