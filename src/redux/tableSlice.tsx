import { createSlice } from "@reduxjs/toolkit";

export interface tableState {
  name: string | null;
}

const initialState: tableState = {
  name: "totalCases",
};

export const tableSlice = createSlice({
  name: "tableName",
  initialState,
  reducers: {
    totalCases: (state) => {
      state.name = "totalCases";
    },
    newCases: (state) => {
      state.name = "newCases";
    },
    totalScreeningAirlines: (state) => {
      state.name = "totalScreeningAirlines";
    },
    totalScreeningAirlinePassengers: (state) => {
      state.name = "totalScreeningAirlinePassengers";
    },
    totalScreeningShips: (state) => {
      state.name = "totalScreeningShips";
    },
  },
});
export const {
  newCases,
  totalCases,
  totalScreeningAirlines,
  totalScreeningAirlinePassengers,
  totalScreeningShips,
} = tableSlice.actions;
export default tableSlice.reducer;
