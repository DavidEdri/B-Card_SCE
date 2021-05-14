import { UserFields, UserPayload } from "@project/types";
import { adminRank } from "../constants";

type PropertyName = string | number;
type Obj = {
  [key in PropertyName]: any;
};

type UserParam = UserFields | UserPayload | undefined;

export const isAdmin = (user: UserParam) => user && user.rank >= adminRank;

export const isActive = (user: UserParam) =>
  user && (user.active || isAdmin(user));

export const isYupObj = (o: any) =>
  typeof o === "object" && o.name === "ValidationError";

/**
 * converts yup's error to object
 * @param e Error object
 */
export const yupErrorsToObj = (e: any) => {
  const errors: Obj = {};
  try {
    e.inner.forEach((err: any) => {
      errors[err.path] = err.message;
    });
  } catch (error) {
    console.log("YupErrorsToObj : conversion error");
    return false;
  }
  return errors;
};

/**
 * concatObjects is no longer maintained
 */
export const concatObjects = (...objects: { [x: string]: any }[]) =>
  objects.reduce((a, b) => ({ ...a, ...b }), {});
