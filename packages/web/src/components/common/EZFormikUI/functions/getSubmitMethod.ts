import Axios from "axios";
import { SubmitMethods } from "../types";

export default (type: SubmitMethods) => {
  switch (type) {
    case "delete":
      return Axios.delete;
    case "get":
      return Axios.get;
    case "patch":
      return Axios.patch;
    case "put":
      return Axios.put;
    default:
      return Axios.post;
  }
};
