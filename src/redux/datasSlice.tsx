import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { datasType } from "../dataType";

export interface DataState {
  data: Array<datasType> | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: "",
};

//GET DATA AXIOS
export const getDatas = createAsyncThunk("user", async () => {
  return axios
    .get("https://covid19.traffy.in.th/api/state-covid19", {})

    .then((response) => response.data);
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDatas.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload.results;
      })
      .addCase(getDatas.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default dataSlice.reducer;
