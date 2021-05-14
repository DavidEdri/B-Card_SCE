import { CardPopulatedFields } from "@project/types";
import React from "react";
import {
  Call,
  WhatsApp,
  Facebook,
  Link,
  Instagram,
  Twitter,
  Room,
} from "@material-ui/icons";
import { Avatar, Box, Typography } from "@material-ui/core";
import { extractPrimaryColors } from "../../helpers";
import { useButtonGenericStyles } from "./style";

type Button = CardPopulatedFields["buttons"]["buttons"][0];

function validationSwitchError(): never {
  throw new Error("generic button error");
}

const ButtonToIcon = (button: Button) => {
  switch (button.type) {
    case "call":
      return <Call />;
    case "whatsapp":
      return <WhatsApp />;
    case "navigation":
      return <Room />;

    case "link":
      // eslint-disable-next-line no-case-declarations
      const { url } = button;
      if (url.toLowerCase().includes("instagram")) return <Instagram />;
      if (url.toLowerCase().includes("facebook")) return <Facebook />;
      if (url.toLowerCase().includes("twitter")) return <Twitter />;
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <Link />;
    default:
      validationSwitchError();
  }
};

const buttonToAttributes = (button: Button) => {
  const commonAttributes = { target: "_blank" };
  switch (button.type) {
    case "call":
      return { ...commonAttributes, href: `tel=${button.number}` };
    case "link":
      return { ...commonAttributes, href: button.url };
    case "navigation":
      return {
        ...commonAttributes,
        href: `https://www.waze.com/ul?ll=${button.lat}%2C${button.lon}&amp;navigate=yes`,
      };
    case "whatsapp":
      return {
        ...commonAttributes,
        href: `https://wa.me/${button.number.replace("0", "972")}?text=${
          button.message
        }`,
      };

    default:
      validationSwitchError();
  }
};

type ButtonGenericProps = {
  data: Button;
};

export const ButtonGeneric = ({ data }: ButtonGenericProps) => {
  const classes = useButtonGenericStyles(extractPrimaryColors(data));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
      component="a"
      {...buttonToAttributes(data)}
    >
      <Avatar className={classes.icon}>{ButtonToIcon(data)}</Avatar>
      <Typography className={classes.text} variant="h6">
        {data.text}
      </Typography>
    </Box>
  );
};
