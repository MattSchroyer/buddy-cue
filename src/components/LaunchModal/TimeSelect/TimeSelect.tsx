import React from 'react';
import { Controller } from 'react-hook-form';
import { MenuItem, Select } from '@mui/material';
import { getFormattedTime, getTimeIntervals } from '../../../utils';

export type Props = {
  name: string;
  control: any;
};

const TimeSelect: React.FC<Props> = ({ name, control }) => {
  // TODO: Refactor getTimeIntervals to output array of ISO date strings
  const startTimes = getTimeIntervals();

  const MenuItems = startTimes.map((dateString: string) => {
    const value = new Date(dateString).toISOString();

    const formattedTime = getFormattedTime(dateString);
    return (
      <MenuItem key={dateString} value={value}>
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
