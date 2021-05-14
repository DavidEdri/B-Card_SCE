import { MailBody } from "../../types/MailBody";

export const resetPasswordEmail = (email: string, token: string): MailBody => ({
  from: process.env.SITE_MAIL,
  to: email,
  subject: "Password reset",
  text: `${process.env.SITE_URL}passwordreset/${token}`,
});
