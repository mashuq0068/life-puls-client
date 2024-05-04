import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Male Biodata',
    value: 590,
  },
  {
    name: 'Female Biodata',
    value: 868,
  },
  {
    name: 'Premium',
    value: 1397,
  },
  {
    name: 'Revenue',
    value: 1480,
  },
  // Add more data as needed
];

export default class AdminBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tgwqy';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
