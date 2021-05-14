import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { CardFields } from "@project/types";
import React from "react";
import { ColorTemplateValue } from "../../../../../hooks/useThemeToColorTemplate";
import { backgroundTypes } from "../../../../BuilderParts/Background/BackgroundPatterns";
import { BackgroundPreview } from "../../../../BuilderParts/Background/BackgroundPreview";
import { useBackgroundSelectStyles } from "./style";

type BackgroundValue = CardFields["background"];

type BackgroundSelectProps = {
  value: BackgroundValue;
  setValue: (newVal: BackgroundValue) => void;
  errorMsg?: string;
  values: any;
};

export const BackgroundSelect = ({
  setValue,
  value,
  errorMsg,
  values,
}: BackgroundSelectProps) => {
  const classes = useBackgroundSelectStyles();
  const { type, primaryColor, secondaryColor } = value;
  const setFieldValue = (field: keyof BackgroundValue, newValue: string) =>
    setValue({ ...value, [field]: newValue });

  const colorTemplate: ColorTemplateValue = React.useMemo(
    () => values.colorTemplate,
    [values],
  );
  const setColors = (primary: string, secondary: string) =>
    setValue({ ...value, primaryColor: primary, secondaryColor: secondary });

  React.useEffect(() => {
    setColors(colorTemplate.background, colorTemplate.secondary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorTemplate]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          בחירת רקע
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue={type}
        >
          {backgroundTypes.map((t) => (
            <Grid item md={4} xs={6} key={t} className={classes.previewItem}>
              <FormControlLabel
                value={t}
                control={
                  <Radio
                    color="primary"
                    onChange={(e) => setFieldValue("type", e.target.value)}
                  />
                }
                label={
                  <BackgroundPreview
                    type={t}
                    colors={{ primaryColor, secondaryColor }}
                  />
                }
                labelPlacement="top"
              />
            </Grid>
          ))}
        </RadioGroup>
      </Grid>
      {/* <Grid item md={6} xs={12}>
        <ColorSelect
          value={value.primaryColor || defaultPrimaryColor}
          setValue={(newVal: string) => setFieldValue("primaryColor", newVal)}
          label="צבע רקע ראשי"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <ColorSelect
          value={value.secondaryColor || defaultSecondaryColor}
          setValue={(newVal: string) => setFieldValue("secondaryColor", newVal)}
          label="צבע רקע משני"
        />
      </Grid> */}
    </Grid>
  );
};
