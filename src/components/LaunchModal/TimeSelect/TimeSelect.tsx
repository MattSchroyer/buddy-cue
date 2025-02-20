import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { getFormattedTime, getTimeIntervals } from '../../../utils';
import { Controller } from 'react-hook-form';

export type Props = {
  name: string;
  control: any;
};

const TimeSelect: React.FC<Props> = ({ name, control }) => {
  const startTimes = getTimeIntervals();

  const MenuItems = startTimes.map((dateString: string) => {
    const formattedTime = getFormattedTime(dateString);
    return (
      <MenuItem key={dateString} value={dateString}>
        {formattedTime}
      </MenuItem>
    );
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field}>
          {MenuItems}
        </Select>
      )}
    />
  );
};

export default TimeSelect;
