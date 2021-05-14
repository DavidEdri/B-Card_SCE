import { Grid, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/Accordion";
import ExpansionPanelSummary from "@material-ui/core/AccordionSummary";
import ExpansionPanelDetails from "@material-ui/core/AccordionDetails";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useExpansionPanelsStyles } from "./style";
import { extractPrimaryColors } from "../helpers";

type ExpansionPanelsProps = {
  data: CardPopulatedFields["expansionPanels"];
};

export const ExpansionPanels = ({ data }: ExpansionPanelsProps) => {
  const classes = useExpansionPanelsStyles(extractPrimaryColors(data));

  return (
    <Grid container item xs={12} className={classes.root}>
      {data.panels.map((p, i) => (
        <Grid item xs={12} key={i} className={classes.item}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i + 1}a-content`}
              id={`panel${i + 1}a-header`}
            >
              <Typography className={classes.primaryColor}>
                {p.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.textColor}>
              {p.text}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      ))}
    </Grid>
  );
};
