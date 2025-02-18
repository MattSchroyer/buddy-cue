import { createSlice } from '@reduxjs/toolkit';
import { isTempWarning } from '../../utils';
import { GOAL_INT_TEMP, HOURS_PER_LB } from '../../constants';

export type TimeTempType = {
  time: string;
  temp: number;
  addedCoals: boolean;
};

export interface SessionState {
  timeTemp: TimeTempType[];
  weight: number;
  isWarningOpen: boolean;
}

const initialState: SessionState = {
  timeTemp: [],
  weight: 0,
  isWarningOpen: false,
};

const timeTempSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addTimeTemp: (state, { payload }) => {
      state.timeTemp = [...state.timeTemp, payload];

      const isWarningOpen = isTempWarning(state.timeTemp, state.weight, GOAL_INT_TEMP, HOURS_PER_LB);

      state.isWarningOpen = isWarningOpen;
    },
    setWeight: (state, { payload }) => {
      state.weight = payload;
    },
    setWarning: (state, { payload }) => {
      state.isWarningOpen = payload;
    },
  },
});

export const { addTimeTemp, setWeight, setWarning } = timeTempSlice.actions;
export default timeTempSlice.reducer;
