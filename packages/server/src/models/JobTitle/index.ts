import mongoose from "mongoose";
import { JobTitleDocument } from "./Document";
import { JobTitleSchema } from "./schema";

export default mongoose.model<JobTitleDocument>("jobtitles", JobTitleSchema);
