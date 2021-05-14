import { Button, Grid } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { extractPrimaryColors } from "../helpers";
import { useVcfStyles } from "./style";

type VcfProps = {
  data: CardPopulatedFields["vcf"];
};

export const Vcf = ({ data }: VcfProps) => {
  const classes = useVcfStyles(extractPrimaryColors(data));

  return (
    <Grid item xs={12} className={classes.root}>
      <Button
        className={classes.btn}
        component="a"
        href={data.url}
        target="_blank"
        variant="contained"
        fullWidth
      >
        {data.text}
      </Button>
    </Grid>
  );
};
