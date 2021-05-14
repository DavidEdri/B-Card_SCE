import { CardCreate } from "../components/user/Card/CardCreate";
import UserHome from "../components/user/Home";
import Profile from "../components/user/Profile";
import { RouteType } from "./RouteType";

const routes: RouteType[] = [
  {
    path: "/user",
    component: UserHome,
    linkText: "איזור אישי",
  },
  {
    path: "/user/profile/:field",
    component: Profile,
  },
  {
    path: "/user/card/create",
    component: CardCreate,
  },
];

export default routes;
