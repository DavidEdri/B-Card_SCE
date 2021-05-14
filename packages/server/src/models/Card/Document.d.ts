import { Document, Model } from "mongoose";
import type { CardFields, CardPopulatedFields } from "@project/types";

export type CardDocument = Document & CardFields;
export type CardPopulatedDocument = Document & CardPopulatedFields;
export type CardModel = Model<CardDocument>;
export type FindParameters = Parameters<CardModel["find"]>;

export type Statics = CardModel & {
  findPopulated: (...args: FindParameters) => Promise<CardPopulatedDocument[]>;
  findOnePopulated: (
    ...args: FindParameters
  ) => Promise<CardPopulatedDocument | null>;
  isHandleAvailable: (handle: string) => Promise<boolean>;
};
