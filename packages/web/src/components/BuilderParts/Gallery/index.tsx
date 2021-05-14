import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { extractBackgroundColor, extractPrimaryColors } from "../helpers";
import { useGalleryStyles } from "./style";

const layout = [
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 4,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
];

type GalleryProps = { data: CardPopulatedFields["gallery"] };

export const Gallery = ({ data }: GalleryProps) => {
  const classes = useGalleryStyles({
    ...extractPrimaryColors(data),
    ...extractBackgroundColor(data),
  });
  const numOfCols = 4;
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className={classes.title}>
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <GridList
          cellHeight={200}
          spacing={5}
          className={classes.gridList}
          cols={numOfCols}
        >
          {data.images.map((tile, i) => (
            <GridListTile
              key={i + tile.src}
              cols={layout[i % layout.length].cols}
              rows={layout[i % layout.length].rows}
            >
              <img src={tile.src} alt="img" style={{ objectFit: "cover" }} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};
