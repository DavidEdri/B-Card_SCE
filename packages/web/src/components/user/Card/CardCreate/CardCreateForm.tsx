import { Grid, InputAdornment } from "@material-ui/core";
import { validation } from "@project/common";
import {
  CardPopulatedFields,
  CityFields,
  JobTitleFields,
} from "@project/types";
import { Background } from "@project/types/src/models/Card/Background";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setCard } from "../../../../redux/slices/card";
import { BackgroundSelect } from "./BackgroundSelect";
import EZFormikUI, {
  FormikSubmit,
  OtherComponent,
} from "../../../common/EZFormikUI";
import { refreshJwt } from "../../../../redux/actions/authActions";
import { ColorTemplate } from "./ColorTemplate";
import useThemeToColorTemplate, {
  ColorTemplateValue,
} from "../../../../hooks/useThemeToColorTemplate";
import { closeDialog } from "../../../../redux/actions/utilsActions";

type CardCreateFormProps = {
  cities: CityFields[];
  jobTitles: JobTitleFields[];
  card?: CardPopulatedFields;
};

// const ColorSelectWrapper = (label: string) => {
//   const Component: OtherComponent = ({ setValue, value, errorMsg }) => (
//     <ColorSelect
//       setValue={setValue}
//       value={value}
//       errorMsg={errorMsg}
//       label={label}
//     />
//   );

//   return Component;
// };

const ExtractColor = (color: "primary" | "secondary" | "text") => {
  const Component: OtherComponent = ({ setValue, value, errorMsg, values }) => {
    const colorTemplate: ColorTemplateValue = React.useMemo(
      () => values.colorTemplate,
      [values],
    );

    React.useEffect(() => {
      setValue(colorTemplate[color]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colorTemplate]);

    return <> </>;
  };
  return Component;
};

export const CardCreateForm = ({
  card,
  cities,
  jobTitles,
}: CardCreateFormProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const themeColorTemplate = useThemeToColorTemplate();
  const initialColorTemplate: ColorTemplateValue = card
    ? {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        background: card.background.primaryColor!,
        primary: card.primaryColor,
        secondary: card.secondaryColor,
        text: card.textColor,
      }
    : themeColorTemplate;
  const initialBackground: Background = {
    type: card?.background.type || "blank",
    primaryColor: "",
    secondaryColor: "",
  };

  const onSubmit: FormikSubmit = async (values) => {
    try {
      const method = card ? Axios.put : Axios.post;
      const url = card ? `/users/cards/settings/${card._id}` : "/users/cards/";
      const res = await method<CardPopulatedFields>(url, values);
      const returnedCard = res.data;

      if (card) {
        dispatch(closeDialog());
        history.push(`/card/${returnedCard.handle}/edit`);
      } else {
        history.push(`/card/${returnedCard.handle}`);
      }
      refreshJwt(dispatch);
      dispatch(setCard(returnedCard));
    } catch (error) {}
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <EZFormikUI
          title={card ? "עריכת כרטיס" : "יצירת כרטיס חדש"}
          validationSchema={validation.users.createCard}
          onSubmit={onSubmit}
          fields={[
            {
              fieldName: "cardTitle",
              type: "text",
              options: "text",
              label: "שם העסק",
              initialValue: card?.mainText.title || "",
            },
            {
              fieldName: "handle",
              type: "text",
              options: "text",
              label: "קישור כניסה לכרטיס",
              initialValue: card?.handle || "",
              props: {
                style: { direction: "ltr" },
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="end">
                      www.b--card.herokuapp.com/card/
                    </InputAdornment>
                  ),
                },
              },
            },
            {
              fieldName: "city",
              type: "autocomplete",
              options: cities.map((city) => ({
                label: city.name,
                value: city._id,
              })),
              label: "מיקום העסק",
              initialValue: card?.city._id || "",
            },
            {
              fieldName: "jobTitle",
              type: "autocomplete",
              options: jobTitles.map((job) => ({
                label: job.name,
                value: job._id,
              })),
              label: "תחום עיסוק",
              initialValue: card?.jobTitle._id || "",
            },
            {
              fieldName: "colorTemplate",
              type: "other",
              label: "",
              initialValue: initialColorTemplate,
              component: ColorTemplate,
            },
            {
              fieldName: "primaryColor",
              type: "other",
              label: "",
              initialValue: initialColorTemplate.primary,
              component: ExtractColor("primary"),
            },
            {
              fieldName: "secondaryColor",
              type: "other",
              label: "",
              initialValue: initialColorTemplate.secondary,
              component: ExtractColor("secondary"),
            },
            {
              fieldName: "textColor",
              type: "other",
              label: "",
              initialValue: initialColorTemplate.text,
              component: ExtractColor("text"),
            },
            {
              fieldName: "background",
              type: "other",
              label: "",
              initialValue: initialBackground,
              component: BackgroundSelect,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
