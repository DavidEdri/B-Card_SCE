import mongoose from "mongoose";
import { CityDocument } from "./Document";
import { CitySchema } from "./schema";

export default mongoose.model<CityDocument>("cities", CitySchema);
