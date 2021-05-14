import { authSlice, cardSlice, utilsSlice } from "./slices";

export default {
  auth: authSlice.reducer,
  card: cardSlice.reducer,
  utils: utilsSlice.reducer,
};
