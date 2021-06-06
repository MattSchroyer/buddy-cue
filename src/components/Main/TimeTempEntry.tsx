import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, TextField } from "@material-ui/core";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

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
  const { timeTempCache, addTimeTemp, dateArr } = useTimeTempContext();
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);
  const [temp, setTemp] = useState<number>(0);

  const nextTimeIndex = timeTempCache.length
    ? timeTempCache[timeTempCache.length - 1].timeIndex + 1
    : 0;
  const nextTime = dateArr[nextTimeIndex];
  const nextTimeString = nextTime
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

  const onTempInputChange = (e: OnChangeEventType) => {
    setTemp(parseInt(e.target.value, 10));
  };
  const onTempButtonClick = () => {
    const tempDiff = timeTempCache.length
      ? temp - timeTempCache[timeTempCache.length - 1].temp
      : 0;
    const formattedTime = nextTime
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    addTimeTemp({
      timeIndex: nextTimeIndex,
      temp,
      time: nextTime,
      formattedTime,
      tempDiff,
    });
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
    </TimeTempEntryContent>
  );
};

export default TimeTempEntry;
