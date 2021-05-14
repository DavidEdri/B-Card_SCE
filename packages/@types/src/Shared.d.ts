import { UserFields } from "./models";

export type UserPayload = Pick<
  UserFields,
  "_id" | "name" | "rank" | "email" | "active" | "gotCard" | "cardHandle"
> & {
  iat: number;
  exp: number;
};
