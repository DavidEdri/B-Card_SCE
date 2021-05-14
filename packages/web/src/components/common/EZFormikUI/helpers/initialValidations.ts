import { FormikValues } from "formik";
import config from "../config";

export const captchaValidation = (values: FormikValues) => {
  const errors: any = {};

  if (values.captcha === "") errors.captcha = config.text.checkCaptcha;

  return errors;
};
