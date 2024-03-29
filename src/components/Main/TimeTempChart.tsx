import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

const TimeTempChart: React.FC = () => {
  const { timeTempCache } = useTimeTempContext();

  return (
    <LineChart
      width={500}
      height={300}
      data={timeTempCache}
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
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default TimeTempChart;
