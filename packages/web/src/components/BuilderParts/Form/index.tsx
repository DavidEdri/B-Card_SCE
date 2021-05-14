import { Card, Grid } from "@material-ui/core";
import { CardFields } from "@project/types";
import React from "react";
import { isProduction } from "../../../helpers/functions";
import EZFormikUI, { Fields } from "../../common/EZFormikUI";
import { useFormStyles } from "./style";

type FormProps = { data: CardFields["form"]; cardID: string };

const fields: Fields = [
  {
    fieldName: "name",
    label: "שם",
    type: "text",
    options: "text",
    initialValue: "",
  },
  {
    fieldName: "email",
    label: "אימייל",
    type: "text",
    options: "text",
    initialValue: "",
  },
  {
    fieldName: "phone",
    label: "טלפון",
    type: "text",
    options: "text",
    initialValue: "",
  },
  {
    fieldName: "msg",
    label: "הודעה",
    type: "textarea",
    rows: 2,
    rowsMax: 4,
    initialValue: "",
  },
];

export const Form = ({ data, cardID }: FormProps) => {
  const classes = useFormStyles();

  return (
    <Grid container item xs={12} className={classes.root}>
      <Card className={classes.card}>
        <Grid item xs={12}>
          <EZFormikUI
            fields={fields}
            title={data.title}
            onSubmit={(values) => {
              console.log(`/guests/card/message/${cardID}`, values);
            }}
            useCaptcha={isProduction()}
          />
        </Grid>
      </Card>
    </Grid>
  );
};
