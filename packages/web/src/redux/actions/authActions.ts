import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserPayload } from "@project/types";
import { Dispatch } from "react";
import { setUser, setGotCard } from "../slices/auth";
import { setAuthToken } from "../../helpers/functions";

export const loginUser = (token: string) => {
  localStorage.removeItem("jwtToken");
  localStorage.setItem("jwtToken", token);
  setAuthToken(token);

  const decoded: UserPayload = jwtDecode(token);
  return setUser(decoded);
};

export const setCurrentUser = (decoded: UserPayload) => setUser(decoded);

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  return setUser(undefined);
};

export const refreshJwt = async (dispatch: Dispatch<any>) => {
  const res = await axios.get("/users/profile/refreshJWT");
  const { token } = res.data;
  const c = loginUser(token);
  console.log(c);
  dispatch(loginUser(token));
};

export { setGotCard };
