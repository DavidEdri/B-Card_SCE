import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardPopulatedFields } from "@project/types";

type State = {
  data: null | CardPopulatedFields;
};

const initialState: State = {
  data: null,
};

const slice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (
      state,
      { payload }: PayloadAction<CardPopulatedFields | null>,
    ) => {
      state.data = payload;
    },
  },
});

export const { setCard } = slice.actions;

export default slice;
