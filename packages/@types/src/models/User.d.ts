import { BaseFields } from "./BaseFields";

export type UserFields = BaseFields & {
  name: string;
  email: string;
  password: string;
  rank: number;
  gotCard: boolean;
  active: boolean;
  activateToken?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  cardHandle?: string;
};
