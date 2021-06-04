import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "@emotion/styled";
import TimeSelect from "./TimeSelect";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

const LaunchModalContentContainer = styled.div`
  position: absolute;
  width: 400px;
  background-color: #ffffff;
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);
  outline: 0;
  padding: 16px;
  border-radius: 4px;
`;

const LaunchModalHeader = styled.h1`
  font-size: 24px;
  padding-bottom: 8px;
`;

const LaunchModalInput = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
`;

const TimeInputContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
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

export type LaunchModalContentType = {
  onSubmit: () => void;
};

const LaunchModalContent: React.FC<LaunchModalContentType> = ({ onSubmit }) => {
  const { timeTempCache, addTimeTemp } = useTimeTempContext();
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);
  const [timeIndex, setTimeIndex] = useState<number>(0);
  const [time, setTime] = useState<Date>(startDate);
  const [temp, setTemp] = useState<number>(0);

  const onTimeInputChange = (index: number, thisTime: Date) => {
    setTimeIndex(index);
    setTime(thisTime);
  };
  const onTempInputChange = (e: OnChangeEventType) => {
    setTemp(parseInt(e.target.value, 10));
  };
  const onTempButtonClick = () => {
    const tempDiff = timeTempCache.length
      ? temp - timeTempCache[timeTempCache.length - 1].temp
      : 0;
    addTimeTemp({ timeIndex, temp, time, tempDiff });
    onSubmit();
  };

  return (
    <LaunchModalContentContainer>
      <LaunchModalHeader>
        Welcome! Please select a starting time and temp (in ºF).
      </LaunchModalHeader>
      <LaunchModalInput>
        <TimeInputContainer>
          <TimeSelect onChange={onTimeInputChange} />
        </TimeInputContainer>
        <div style={{ padding: "8px" }}>
          <TextField
            id="temp-input"
            label="Temperature"
            variant="outlined"
            onChange={(e) => onTempInputChange(e)}
          />
        </div>
      </LaunchModalInput>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onTempButtonClick()}
        >
          Enter
        </Button>
      </div>
    </LaunchModalContentContainer>
  );
};

export default LaunchModalContent;
