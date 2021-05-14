import { Grid, Typography } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { extractPrimaryColors } from "../helpers";
import { useMainTextStyles } from "./style";

type MainTextProps = { data: CardPopulatedFields["mainText"] };

export const MainText = ({ data }: MainTextProps) => {
  const classes = useMainTextStyles(extractPrimaryColors(data));
  const { title, text } = data;

  return (
    <Grid container item className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.text}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};
