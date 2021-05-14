import { Avatar } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { useMainAvatarStyles } from "./style";

type MainAvatarProps = { url: CardPopulatedFields["mainAvatar"] };

const defaultImg =
  "https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png";

export const MainAvatar = ({ url }: MainAvatarProps) => {
  const classes = useMainAvatarStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={url || defaultImg} />
    </div>
  );
};
