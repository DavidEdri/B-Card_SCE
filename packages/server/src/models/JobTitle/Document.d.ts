import { Document } from "mongoose";
import type { JobTitleFields } from "@project/types";

export type JobTitleDocument = Document & JobTitleFields;
