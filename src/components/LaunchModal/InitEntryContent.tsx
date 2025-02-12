import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import TimeSelect from "./TimeSelect";
import { addTimeTemp, setWeight } from "../../redux/slices/sessionSlice";

const InitEntryContentContainer = styled.div`
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

const LaunchModalHeader = styled.div`
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

export type InitEntryContentType = {
  onSubmit: () => void;
};

const InitEntryContent: React.FC<InitEntryContentType> = ({ onSubmit }) => {
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);
  const [time, setTime] = useState<Date>(startDate);
  const [temp, setTemp] = useState<number>(0);
  const [thisWeight, setThisWeight] = useState<number>(0);

  const dispatch = useDispatch();

  const onTimeInputChange = (dateString: string) => {
    const thisTime = new Date(dateString);
    setTime(thisTime);
  };

  const onTempInputChange = (e: OnChangeEventType) => {
    setTemp(parseInt(e.target.value, 10));
  };

  const onWeightInputChange = (e: OnChangeEventType) => {
    setThisWeight(parseInt(e.target.value, 10));
  };

  const onTempButtonClick = () => {
    const newTimeTemp = {
      temp,
      time: time.toISOString(),
      addedCoals: true,
    };
    
    dispatch(
      addTimeTemp(newTimeTemp)
    );

    dispatch(
      setWeight(thisWeight)
    );

    onSubmit();
  };

  return (
    <InitEntryContentContainer>
      <LaunchModalHeader>
        <h1>Welcome to Buddy Cue!</h1>
        <div>
          Please select a starting time, temp (in ºF), and weight (in lbs).
        </div>
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
        <div style={{ padding: "8px" }}>
          <TextField
            id="weight-input"
            label="Weight"
            variant="outlined"
            onChange={(e) => onWeightInputChange(e)}
          />
        </div>
      </LaunchModalInput>
      <div style={{ padding: "8px 0 8px 0" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onTempButtonClick()}
        >
          Enter
        </Button>
      </div>
    </InitEntryContentContainer>
  );
};

export default InitEntryContent;
