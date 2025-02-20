import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", thisYear: 10000, lastYear: "4000" },
  { month: "Feb", thisYear: 12000, lastYear: 9000 },
  { month: "Mar", thisYear: 8000, lastYear: 14000 },
  { month: "Apr", thisYear: 20000, lastYear: 10000 },
  { month: "May", thisYear: 18000, lastYear: 15000 },
  { month: "Jun", thisYear: 15000, lastYear: 12000 },
  { month: "Jul", thisYear: 22000, lastYear: 19000 },
];

const TotalUsersChart: React.FC = () => {
  return (
    <div className="p-8 bg-[#F7F9FB] rounded-[16px] flex-grow">
      {/* Chart Header */}
      <div className="flex items-center space-x-12 mb-4">
        <h4 className="text-sm font-inter">Total Users</h4>

        <h4 className="text-sm font-inter font-light text-[#1C1C1C66]">
          Total Projects
        </h4>

        <h4 className="text-sm font-inter font-light text-[#1C1C1C66]">
          Operating Status
        </h4>

        <div className="flex space-x-4 text-sm">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-xs font-light font-inter">This year</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#A8C5DA]"></span>
            <span className="text-xs font-light font-inter">Last year</span>
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#a0aec0" />
          <YAxis stroke="#a0aec0" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="black"
            strokeWidth={1}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#A8C5DA"
            strokeWidth={1}
            dot={false}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalUsersChart;
