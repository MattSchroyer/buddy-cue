import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { addTimeTemp } from "../../redux/slices/sessionSlice";
import { RootState } from "../../redux/store";
import { getStartTimes } from "../../utils";

export type OnCoalsChangeType = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

const TimeTempEntryContent = styled.div`
  display: flex;
  align-items: center;
`;

export type OnChangeEventType = {
  target: {
    value: string;
  };
};

export type OnTimeInputChangeType = {
  value: string;
  name?: string | undefined;
};

const TimeTempEntry: React.FC = () => {
  const dateArr = getStartTimes();
  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);
  const [temp, setTemp] = useState<number>(0);
  const [coals, setCoals] = useState<number>(0);

  const dispatch = useDispatch();

  const nextTimeIndex = timeTemp.length
    ? timeTemp[timeTemp.length - 1].timeIndex + 1
    : 0;
  const nextTime = dateArr[nextTimeIndex];
  const nextTimeString = nextTime
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

  const onTempInputChange = (e: OnChangeEventType) => {
    setTemp(parseInt(e.target.value, 10));
  };

  const onTempButtonClick = () => {
    // todo: time diff should be calculated in situ, not part of state or record
    const tempDiff = timeTemp.length
      ? temp - timeTemp[timeTemp.length - 1].temp
      : 0;

    const formattedTime = nextTime
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

    dispatch(
      addTimeTemp({
        timeIndex: nextTimeIndex,
        temp,
        time: nextTime,
        formattedTime,
        tempDiff,
        addedCoals: !!coals,
      })
    );
  };

  const onCoalsChange = (e: OnCoalsChangeType) => {
    setCoals(e.target.value as number);
  };

  return (
    <TimeTempEntryContent>
      <div style={{ padding: "12px" }}>{nextTimeString}</div>
      <div style={{ padding: "12px" }}>
        <TextField
          id="temp-input"
          label="Temperature"
          variant="outlined"
          margin="dense"
          onChange={(e) => onTempInputChange(e)}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onTempButtonClick()}
        >
          Enter Temp
        </Button>
      </div>
      <div style={{ padding: "12px" }}>
        <Select
          labelId="add-coals-select"
          id="add-coals-select"
          onChange={(e) => onCoalsChange(e)}
          value={coals}
        >
          <MenuItem value={0}>No</MenuItem>
          <MenuItem value={1}>Yes</MenuItem>
        </Select>
      </div>
    </TimeTempEntryContent>
  );
};

export default TimeTempEntry;
