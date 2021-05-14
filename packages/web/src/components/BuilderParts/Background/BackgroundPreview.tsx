import { CardFields } from "@project/types";
import React from "react";
import { useBackgroundStyle } from "../../../hooks";

type BackgroundPreviewProps = {
  type: CardFields["background"]["type"];
  colors: Parameters<typeof useBackgroundStyle>["1"];
};

export const BackgroundPreview = ({ type, colors }: BackgroundPreviewProps) => {
  const className = useBackgroundStyle(type, colors);
  return <div className={className} style={{ height: 100, width: 100 }} />;
};
