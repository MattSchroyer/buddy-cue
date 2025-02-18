import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import TimeSelect from '../TimeSelect/TimeSelect';
import { addTimeTemp, setWeight } from '../../../redux/slices/sessionSlice';
import { getDefaultStartTime } from '../../../utils';

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

export type OnChangeEventType = {
  target: {
    value: string;
  };
};

export type OnTimeInputChangeType = {
  value: string;
  name?: string | undefined;
};

export type Props = {
  onSubmit: () => void;
};

const InitEntryContent: React.FC<Props> = ({ onSubmit }) => {
  const startTime = getDefaultStartTime();

  const [time, setTime] = useState<string>(startTime);
  const [temp, setTemp] = useState<number>(0);
  const [thisWeight, setThisWeight] = useState<number>(0);

  const dispatch = useDispatch();

  const onTimeInputChange = (thisTime: string) => {
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
      time,
      addedCoals: true,
    };

    dispatch(addTimeTemp(newTimeTemp));

    dispatch(setWeight(thisWeight));

    onSubmit();
  };

  return (
    <InitEntryContentContainer>
      <LaunchModalHeader>
        <h1>Welcome to Buddy Cue!</h1>
        <div>Please select a starting time, temp (in ºF), and weight (in lbs).</div>
      </LaunchModalHeader>
      <LaunchModalInput>
        <form>
          <div style={{ padding: '8px' }}>
            <TimeSelect onChange={onTimeInputChange} />
          </div>
          <div style={{ padding: '8px' }}>
            <TextField
              id="temp-input"
              label="Temperature"
              variant="outlined"
              onChange={onTempInputChange}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <TextField
              id="weight-input"
              label="Weight"
              variant="outlined"
              onChange={onWeightInputChange}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={onTempButtonClick}
            >
              Enter
            </Button>
          </div>
        </form>
      </LaunchModalInput>
    </InitEntryContentContainer>
  );
};

export default InitEntryContent;
