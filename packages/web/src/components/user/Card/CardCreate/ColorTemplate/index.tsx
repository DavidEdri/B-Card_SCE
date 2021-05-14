import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useThemeToColorTemplate, {
  ColorTemplateValue,
} from "../../../../../hooks/useThemeToColorTemplate";
import { useColorTemplateStyles } from "./style";

type ColorTemplateProps = {
  value: ColorTemplateValue;
  setValue: (newVal: ColorTemplateValue) => void;
};

const Quarter = ({
  color,
  className,
}: {
  className: string;
  color: string;
}) => <div className={className} style={{ backgroundColor: color }} />;

export const ColorTemplate = ({ setValue, value }: ColorTemplateProps) => {
  const classes = useColorTemplateStyles();
  const [selected, setSelected] = React.useState(0);

  const options: ColorTemplateValue[] = [
    useThemeToColorTemplate(),
    {
      primary: "#316879",
      secondary: "#f47a60",
      text: "#000000",
      background: "#ced7d8",
    },
    {
      primary: "#d902ee",
      secondary: "#ffd79d",
      text: "#f162ff",
      background: "#320d3e",
    },
  ];

  const onSelect = (index: number) => {
    setSelected(index);
    setValue(options[index]);
  };

  React.useEffect(() => {
    const index = options.findIndex(
      (o) =>
        o.primary === value.primary &&
        o.secondary === value.secondary &&
        o.text === value.text &&
        o.background === value.background,
    );

    if (index > -1) setSelected(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          בחר את צבעי האתר
        </Typography>
      </Grid>
      <Grid container item className={classes.optionsContainer} xs={12}>
        {options.map((o, i) => (
          <Grid
            item
            md={3}
            xs={6}
            key={i}
            className={`${classes.option} ${i === selected ? "active" : ""}`}
            onClick={() => onSelect(i)}
          >
            <Quarter className={classes.quarter} color={o.primary} />
            <Quarter className={classes.quarter} color={o.secondary} />
            <Quarter className={classes.quarter} color={o.text} />
            <Quarter className={classes.quarter} color={o.background} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
