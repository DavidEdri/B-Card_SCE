import axios, { AxiosResponse } from "axios";
import { Color as VariantType } from "@material-ui/lab/Alert";
import { constants } from "@project/common";
import store from "../redux";
import { logoutUser } from "../redux/actions/authActions";
import { openSnackbar } from "../redux/actions/utilsActions";

const { text } = constants;

const gotMsg = (obj: any) =>
  typeof obj === "object" && "msg" in obj && typeof obj.msg === "string";

const showMsg = (msg: string, variant: VariantType) => {
  store.dispatch(openSnackbar({ msg, variant }));
};

const applyAxiosConfig = () => {
  try {
    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        switch (response.status) {
          case 200:
            if (gotMsg(response.data)) {
              showMsg(response.data.msg, "success");
            }
            break;
          default:
            break;
        }
        return response;
      },
      (error) => {
        const { status, data } = error.response;
        switch (status) {
          case 401:
            store.dispatch(logoutUser());
            window.location.href = "/login";
            break;

          case 400:
            if (gotMsg(data)) {
              showMsg(data.msg, "error");
            }
            break;

          case 500:
            showMsg(text.serverError, "error");
            break;

          default:
            break;
        }

        return Promise.reject(error);
      },
    );
  } catch (e) {
    showMsg(text.serverError, "error");
  }
};

export default applyAxiosConfig;
