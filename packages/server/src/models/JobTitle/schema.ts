import { Schema } from "mongoose";
import { JobTitleDocument } from "./Document";

export const JobTitleSchema = new Schema<JobTitleDocument>({
  name: {
    type: String,
    required: true,
  },
});
