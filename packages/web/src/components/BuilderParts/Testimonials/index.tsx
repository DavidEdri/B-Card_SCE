import { Container, Grid, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { Carousel } from "../../common/Carousel";
import { extractPrimaryColors } from "../helpers";
import { useTestimonialsStyles } from "./style";

type TestimonialsProps = {
  data: CardPopulatedFields["testimonials"];
};

export const Testimonials = ({ data }: TestimonialsProps) => {
  const classes = useTestimonialsStyles(extractPrimaryColors(data));

  return (
    <Grid container item className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Carousel
          primaryColor={data.primaryColor}
          items={data.data.map((d, i) => (
            <Item text={d.text} author={d.author} classes={classes} key={i} />
          ))}
        />
      </Grid>
    </Grid>
  );
};

function Item({
  text,
  author,
  classes,
}: {
  text: string;
  author: string;
  classes: ClassNameMap<string>;
}) {
  return (
    <Container>
      <Typography variant="h6" className={classes.itemText}>
        {text}
      </Typography>
      <Typography variant="h6" className={classes.itemAuthor}>
        {author}
      </Typography>
    </Container>
  );
}
