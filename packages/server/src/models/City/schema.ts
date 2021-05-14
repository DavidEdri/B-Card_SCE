import { Schema } from "mongoose";
import { CityDocument } from "./Document";

export const CitySchema = new Schema<CityDocument>({
  name: {
    type: String,
    required: true,
  },
});
