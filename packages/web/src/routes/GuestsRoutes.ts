import { constants } from "@project/common";
import GuestHome from "../components/guest/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ActivateAccount from "../components/auth/activate/ActivateResend";
import ValidateToken from "../components/auth/activate/ValidateToken";
import SendPwdToken from "../components/auth/passwordReset/SendPwdToken";
import ChangePassword from "../components/auth/passwordReset/ChangePassword";
import { RouteType } from "./RouteType";
import { Card } from "../components/Card";

const { text } = constants;

const routes: RouteType[] = [
  {
    path: "/",
    component: GuestHome,
    linkText: text.homeLink,
    restriction: "loggedOut",
  },
  {
    path: "/login",
    component: Login,
    linkText: text.loginLink,
    restriction: "loggedOut",
  },
  {
    path: "/register",
    component: Register,
    linkText: text.registerLink,
    restriction: "loggedOut",
  },
  {
    path: "/activate",
    component: ActivateAccount,
  },
  {
    path: "/activate/:token",
    component: ValidateToken,
  },
  {
    path: "/forgotPassword",
    component: SendPwdToken,
  },
  {
    path: "/passwordReset/:token",
    component: ChangePassword,
  },
  {
    path: "/card/:handle/:mode?",
    component: Card,
  },
];

export default routes;
