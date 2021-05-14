import { CardPopulatedFields } from "@project/types";
import React from "react";
import { useMainImageStyles } from "./style";

type MainImageProps = { url: CardPopulatedFields["mainImage"] };

const defaultImg =
  "https://jpublicrelations.com/wp-content/uploads/2015/12/placeholder-1.png.1236x617_default.png";

export const MainImage = ({ url }: MainImageProps) => {
  const classes = useMainImageStyles({ url: url || defaultImg });

  return <div className={classes.root} />;
};
