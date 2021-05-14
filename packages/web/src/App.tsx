import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import axiosConfig from "./helpers/axiosConfig";
import loadLocalStorage from "./helpers/loadLocalStorage";

import "./App.css";
import store from "./redux";
import LoggedinRoute from "./components/common/protectRoutes/LoggedinRoute";
import AdminRoute from "./components/common/protectRoutes/AdminRoute";
import { AdminsRoutes, UsersRoutes, GuestsRoutes } from "./routes";
import { setCaptchaKey, changeText } from "./components/common/EZFormikUI";
import AppProvider from "./AppProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Utils from "./components/utils";
import PageNotFound from "./components/404";
import { NoCardAlert } from "./components/layout/NoCardAlert";

const captchaKey = process.env.REACT_APP_CAPTCHA_KEY || "";

axiosConfig();
loadLocalStorage();
setCaptchaKey(captchaKey);
changeText({
  addNewItem: () => "הוסף",
  selectEmpty: "-",
  submit: "שלח",
  checkCaptcha: "נא לסמן את התיבה",
});

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <div className="app">
          <Switch>
            {/* if viewing a card do not show menu */}
            <Route path="/card/" component={() => <></>} />
            <Route path="/" component={Navbar} />
          </Switch>
          <NoCardAlert />
          <Container maxWidth={false} disableGutters className="main-container">
            <Switch>
              {GuestsRoutes.map((r) => (
                <Route
                  exact
                  path={r.path}
                  component={r.component}
                  key={r.path}
                />
              ))}

              {UsersRoutes.map((r) => (
                <LoggedinRoute
                  exact
                  path={r.path}
                  component={r.component}
                  key={r.path}
                />
              ))}

              {AdminsRoutes.map((r) => (
                <AdminRoute
                  exact
                  path={r.path}
                  component={r.component}
                  key={r.path}
                />
              ))}

              <Route component={PageNotFound} />
            </Switch>
          </Container>
          <Footer />
        </div>
        <Utils />
      </AppProvider>
    </Provider>
  );
}
