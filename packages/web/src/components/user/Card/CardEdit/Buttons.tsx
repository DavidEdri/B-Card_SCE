import {
  Grid,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { CardPopulatedFields } from "@project/types";
import React from "react";
import { OtherComponent } from "../../../common/EZFormikUI";

type CardButton = CardPopulatedFields["buttons"]["buttons"][0];
type CardButtonOptions = { label: string; value: CardButton["type"] }[];

const options: CardButtonOptions = [
  {
    value: "call",
    label: "שיחה",
  },
  {
    value: "link",
    label: "קישור",
  },
  {
    value: "navigation",
    label: "ניווט",
  },
  {
    value: "whatsapp",
    label: "וואטסאפ",
  },
];

export const Buttons: OtherComponent = ({ setValue, value }) => {
  const values = value as CardButton[];

  const removeItem = (index: number) => {
    const tmp = [...values];
    tmp.splice(index, 1);
    setValue(tmp);
  };

  const addItem = () => {
    const newRow: CardButton = { type: "link", text: "קישור", url: "#" };

    setValue([...values, newRow]);
  };

  const maxReached = values.length === 6;

  const getOnChange =
    (index: number) =>
    (
      field: keyof CardButton | "url" | "number" | "lat" | "lon" | "message",
      newValue: any,
    ) => {
      const newState = [...values];
      const tmp = { ...values[index], [field]: newValue };
      newState[index] = tmp;

      setValue(newState);
    };

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography>כפתורים</Typography>
      </Grid>
      {values.map((btn, index) => {
        const { type } = btn;
        const onChange = getOnChange(index);
        const btnValues = values[index] as any;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Box
            display="flex"
            key={index}
            style={{ width: "100%", marginBottom: 10 }}
          >
            <Grid container item xs={12}>
              <Grid item md={4} xs={12}>
                <FormControl component="fieldset" fullWidth margin="dense">
                  <InputLabel>סוג כפתור</InputLabel>
                  <Select
                    type="select"
                    fullWidth
                    onChange={(e) => onChange("type", e.target.value)}
                    value={btnValues.type}
                  >
                    {options.map((o) => (
                      <MenuItem key={o.value} value={o.value}>
                        {o.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  margin="dense"
                  fullWidth
                  label="תיאור"
                  onChange={(e) => onChange("text", e.target.value)}
                  value={btnValues.text}
                />
              </Grid>
              {["whatsapp", "call"].includes(type) && (
                <Grid item md={4} xs={12}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="מס' טלפון"
                    onChange={(e) => onChange("number", e.target.value)}
                    value={btnValues.number}
                  />
                </Grid>
              )}
              {["link"].includes(type) && (
                <Grid item md={4} xs={12}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="קישור"
                    onChange={(e) => onChange("url", e.target.value)}
                    value={btnValues.url}
                  />
                </Grid>
              )}
              {["navigation"].includes(type) && (
                <>
                  <Grid item md={4} xs={12}>
                    <TextField
                      margin="dense"
                      fullWidth
                      label="נק' אורך"
                      onChange={(e) => onChange("lat", e.target.value)}
                      value={btnValues.lat}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      margin="dense"
                      fullWidth
                      label="נק' רוחב"
                      onChange={(e) => onChange("lon", e.target.value)}
                      value={btnValues.lon}
                    />
                  </Grid>
                </>
              )}
              {["whatsapp"].includes(type) && (
                <Grid item md={4} xs={12}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="הודעה"
                    onChange={(e) => onChange("message", e.target.value)}
                    value={btnValues.message}
                  />
                </Grid>
              )}
            </Grid>
            <Button color="primary" onClick={() => removeItem(index)}>
              x
            </Button>
          </Box>
        );
      })}
      {!maxReached && (
        <Grid item xs={12}>
          <Button color="primary" onClick={addItem}>
            הוסף כפתור
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
