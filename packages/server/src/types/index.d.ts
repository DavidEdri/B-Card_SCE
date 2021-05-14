import { UserDocument } from "../models/User/Document";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserDocument;
  }
}
