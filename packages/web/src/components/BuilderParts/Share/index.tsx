import { Grid, Avatar, Typography } from "@material-ui/core";
import { Facebook, WhatsApp, Textsms } from "@material-ui/icons";
import React from "react";
import { isProduction } from "../../../helpers/functions";
import { useShareStyles } from "./style";

type ShareProps = { cardHandle: string };

export const Share = ({ cardHandle }: ShareProps) => {
  const classes = useShareStyles();
  const url = `${
    isProduction() ? "b--card.herokuapp.com" : "localhost:3000"
  }/card/${cardHandle}`;

  return (
    <Grid container item className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.title}>
          שתפו אותנו
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.iconContainer}>
        <Avatar
          className={`${classes.icon} ${classes.fb}`}
          component="a"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
        >
          <Facebook />
        </Avatar>

        <Avatar
          className={`${classes.icon} ${classes.wa}`}
          component="a"
          href={`https://api.whatsapp.com/send?text=${url}`}
          target="_blank"
        >
          <WhatsApp />
        </Avatar>

        <Avatar
          className={`${classes.icon} ${classes.txt}`}
          component="a"
          href={`sms://?&body=${url}`}
          target="_blank"
        >
          <Textsms />
        </Avatar>
      </Grid>
    </Grid>
  );
};
