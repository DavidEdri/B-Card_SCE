import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// RTL
import { create } from "jss";
import rtl from "jss-rtl";
import { createMuiTheme } from "@material-ui/core/styles";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider, StylesProvider, jssPreset } from "@material-ui/styles";
import { isRTL } from "./helpers/constants";
import { useTypedSelector } from "./redux";

const AppProvider: React.FC = ({ children }) => {
  const card = useTypedSelector((state) => state.card);

  const theme = createMuiTheme({
    direction: isRTL ? "rtl" : "ltr",
    palette: card.data
      ? {
          primary: {
            main: card.data.primaryColor,
            contrastText: card.data.textColor,
          },
          secondary: {
            main: card.data.secondaryColor,
          },
          text: { primary: card.data.textColor },
          background: {
            default: card.data.background.secondaryColor,
            paper: card.data.background.secondaryColor,
          },
        }
      : undefined,
  });

  const presets = [...jssPreset().plugins];
  const rtlPresets = [...presets, rtl()];

  const jss = create({ plugins: isRTL ? rtlPresets : presets });

  document.body.style.direction = isRTL ? "rtl" : "ltr";

  return (
    <Router>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StylesProvider>
    </Router>
  );
};

export default AppProvider;
