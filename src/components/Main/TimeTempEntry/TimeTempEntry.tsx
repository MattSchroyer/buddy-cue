import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { addTimeTemp } from '../../../redux/slices/sessionSlice';
import { RootState } from '../../../redux/store';
import { getDefaultStartDate, getFormattedTime, getTimeIntervals } from '../../../utils';

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
  const timeArr = getTimeIntervals();
  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

  const [temp, setTemp] = useState<number>(0);
  const [coals, setCoals] = useState<number>(0);

  const dispatch = useDispatch();

  const prevTime = new Date(timeTemp.at(-1)?.time || timeArr[0]);

  // TODO: No magic numbers
  const newTime = new Date(prevTime.getTime() + 30 * 60 * 1000).toISOString();
  const newTimeFormatted = getFormattedTime(newTime);

  const onTempInputChange = (e: OnChangeEventType) => {
    setTemp(parseInt(e.target.value, 10));
  };

  const onTempButtonClick = () => {
    const newTimeTemp = {
      temp,
      time: newTime,
      addedCoals: !!coals,
    };

    dispatch(addTimeTemp(newTimeTemp));
  };

  const onCoalsChange = (e: OnCoalsChangeType) => {
    setCoals(e.target.value as number);
  };

  return (
    <TimeTempEntryContent>
      <div style={{ padding: '12px' }}>{newTimeFormatted}</div>
      <div style={{ padding: '12px' }}>
        <TextField
          id="temp-input"
          label="Temperature"
          variant="outlined"
          margin="dense"
          onChange={(e) => onTempInputChange(e)}
        />
      </div>
      <div style={{ padding: '12px' }}>
        <Button variant="contained" color="primary" onClick={() => onTempButtonClick()}>
          Enter Temp
        </Button>
      </div>
      <div style={{ padding: '12px' }}>
        <Select labelId="add-coals-select" id="add-coals-select" onChange={(e) => onCoalsChange(e)} value={coals}>
          <MenuItem value={0}>No</MenuItem>
          <MenuItem value={1}>Yes</MenuItem>
        </Select>
      </div>
    </TimeTempEntryContent>
  );
};

export default TimeTempEntry;
