import mongoose from "mongoose";
import { Statics, CardDocument } from "./Document";
import { CardSchema } from "./schema";

export default mongoose.model<CardDocument, Statics>("cards", CardSchema);
