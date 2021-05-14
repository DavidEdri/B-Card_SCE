import { Schema } from "mongoose";
import { CardDocument } from "./Document";
import { statics } from "./functions";

const hidable = {
  isShown: {
    type: Boolean,
    default: true,
  },
};

const primaryColors = {
  primaryColor: {
    type: String,
  },
  primaryTextColor: {
    type: String,
  },
};

const secondaryColors = {
  secondaryColor: {
    type: String,
  },
  secondaryTextColor: {
    type: String,
  },
};

const componentBackgroundColor = {
  backgroundColor: {
    type: String,
  },
};

const about = {
  ...hidable,
  ...primaryColors,
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
};

const actionText = {
  ...hidable,
  primaryColors,
  componentBackgroundColor,
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
};

const background = {
  type: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
  },
  secondaryColor: {
    type: String,
  },
};

const buttons = {
  ...hidable,
  ...primaryColors,
  buttons: [
    {
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      number: {
        type: String,
      },
      message: {
        type: String,
      },
      url: {
        type: String,
      },
      lat: {
        type: Number,
      },
      lon: {
        type: Number,
      },
    },
  ],
};

const expansionPanels = {
  ...hidable,
  ...primaryColors,
  panels: [
    {
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
};

const form = {
  ...hidable,
  title: {
    type: String,
    required: true,
  },
};

const gallery = {
  ...hidable,
  ...primaryColors,
  ...componentBackgroundColor,
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      src: { type: String, required: true },
    },
  ],
};

const mainText = {
  ...primaryColors,
  ...secondaryColors,
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
};

const testimonials = {
  ...hidable,
  ...primaryColors,
  ...secondaryColors,
  title: {
    type: String,
    required: true,
  },
  data: [
    {
      author: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
};

const vcf = {
  ...hidable,
  ...primaryColors,
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
};

export const CardSchema = new Schema<CardDocument>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "cities",
  },
  jobTitle: {
    type: Schema.Types.ObjectId,
    ref: "jobtitles",
  },
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  mainImage: {
    type: String,
  },
  mainAvatar: {
    type: String,
  },
  primaryColor: {
    type: String,
    required: true,
  },
  secondaryColor: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  about,
  actionText,
  background,
  buttons,
  expansionPanels,
  form,
  gallery,
  mainText,
  testimonials,
  vcf,
});

CardSchema.statics.findOnePopulated = statics.findOnePopulated;
CardSchema.statics.findPopulated = statics.findPopulated;
CardSchema.statics.isHandleAvailable = statics.isHandleAvailable;
