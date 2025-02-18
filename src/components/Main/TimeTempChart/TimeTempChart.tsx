import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getFormattedTimeTemp } from '../../../utils';

const TimeTempChart: React.FC = () => {
  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

  const formattedTimeTemp = getFormattedTimeTemp(timeTemp);

  return (
    <LineChart
      width={500}
      height={300}
      data={formattedTimeTemp}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="formattedTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default TimeTempChart;
