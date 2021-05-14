import { Grid, Typography } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { extractPrimaryColors } from "../helpers";
import { useAboutStyles } from "./style";

type AboutProps = {
  data: CardPopulatedFields["about"];
};

export const About = ({ data }: AboutProps) => {
  const classes = useAboutStyles(extractPrimaryColors(data));
  const { text, title } = data;

  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.text} variant="body1">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};
