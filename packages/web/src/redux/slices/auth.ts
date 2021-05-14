import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPayload } from "@project/types";

type State = {
  isLoggedin: boolean;
  user?: UserPayload;
};

const initialState: State = {
  isLoggedin: false,
  user: undefined,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (_, { payload }: PayloadAction<UserPayload | undefined>) => ({
      isLoggedin: !!payload,
      user: payload,
    }),
    setGotCard: (state, { payload }: PayloadAction<boolean>) => {
      if (state.user) state.user.gotCard = payload;
    },
  },
});

export const { setUser, setGotCard } = slice.actions;

export default slice;
