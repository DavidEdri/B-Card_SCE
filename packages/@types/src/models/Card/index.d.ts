import { BaseFields } from "../BaseFields";
import { About } from "./About";
import { Buttons } from "./Buttons";
import { ActionText } from "./ActionText";
import { Background } from "./Background";
import { ExpansionPanels } from "./ExpansionPanels";
import { Form } from "./Form";
import { Gallery } from "./Gallery";
import { MainText } from "./MainText";
import { Testimonials } from "./Testimonials";
import { VCF } from "./VCF";
import { UserFields } from "../User";
import { JobTitleFields } from "../JobTitle";
import { CityFields } from "../City";

type BaseCardFields = BaseFields & {
  handle: string;
  mainImage?: string;
  mainAvatar?: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  about: About;
  actionText: ActionText;
  background: Background;
  buttons: Buttons;
  expansionPanels: ExpansionPanels;
  form: Form;
  gallery: Gallery;
  mainText: MainText;
  testimonials: Testimonials;
  vcf: VCF;
};

export type CardFields = BaseCardFields & {
  owner: string;
  jobTitle: string;
  city: string;
};

export type CardPopulatedFields = BaseCardFields & {
  owner: Omit<UserFields, "password">;
  jobTitle: JobTitleFields;
  city: CityFields;
};

export * from "./Common";
