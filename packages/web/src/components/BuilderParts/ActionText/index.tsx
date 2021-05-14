import { Avatar, Grid, Typography } from "@material-ui/core";
import ClickIcon from "@material-ui/icons/TouchApp";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { extractBackgroundColor, extractPrimaryColors } from "../helpers";
import { useActionTextStyles } from "./style";

type ActionTextProps = {
  data: CardPopulatedFields["actionText"];
};

export const ActionText = ({ data }: ActionTextProps) => {
  const classes = useActionTextStyles({
    ...extractPrimaryColors(data),
    ...extractBackgroundColor(data),
  });
  const { text, url } = data;

  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.text}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Avatar
          className={classes.icon}
          component="a"
          href={url}
          target="_blank"
        >
          <ClickIcon />
        </Avatar>
      </Grid>
    </Grid>
  );
};
