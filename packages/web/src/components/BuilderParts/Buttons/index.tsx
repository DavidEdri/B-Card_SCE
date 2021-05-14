import { Grid } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { ButtonGeneric } from "./ButtonGeneric";
import { useButtonsStyles } from "./style";

type Buttons = CardPopulatedFields["buttons"];

type ButtonsProps = {
  data: Buttons;
};

export const Buttons = ({ data }: ButtonsProps) => {
  const classes = useButtonsStyles();

  return (
    <Grid container item xs={12} className={classes.root}>
      {data.buttons.map((b, i) => (
        <Grid item lg={2} xs={4} key={`${i}:${b.type}`}>
          <ButtonGeneric data={b} />
        </Grid>
      ))}
    </Grid>
  );
};
