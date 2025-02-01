import { createSlice } from '@reduxjs/toolkit';

export type TimeTempType = {
  timeIndex: number;
  time: Date;
  formattedTime: string;
  temp: number;
  tempDiff: number;
  addedCoals: boolean;
};

export interface SessionState {
  timeTemp: TimeTempType[];
  weight: number;
}

const initialState: SessionState = {
  timeTemp: [],
  weight: 0,
};

const timeTempSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addTimeTemp: (state, { payload }) => {
      state.timeTemp = [...state.timeTemp, payload];
    },
    setWeight: (state, { payload }) => {
      state.weight = payload;
    },
  },
});

export const { addTimeTemp, setWeight } = timeTempSlice.actions;
export default timeTempSlice.reducer;
