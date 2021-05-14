import { Document } from "mongoose";
import type { CityFields } from "@project/types";

export type CityDocument = Document & CityFields;
