import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "This year",
    color: "#000000",
    data: [
      { x: "Jan", y: 10000 },
      { x: "Feb", y: 12000 },
      { x: "Mar", y: 8000 },
      { x: "Apr", y: 20000 },
      { x: "May", y: 18000 },
      { x: "Jun", y: 15000 },
      { x: "Jul", y: 22000 },
    ],
  },
  {
    id: "Last year",
    color: "#60A5FA",
    data: [
      { x: "Jan", y: 5000 },
      { x: "Feb", y: 9000 },
      { x: "Mar", y: 14000 },
      { x: "Apr", y: 10000 },
      { x: "May", y: 15000 },
      { x: "Jun", y: 12000 },
      { x: "Jul", y: 19000 },
    ],
  },
];

const TotalUsersChart2: React.FC = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-[16px] flex-grow">
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
      <div className="h-64">
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: 0, max: 25000, stacked: false }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            format: (value) => {
              if (value == 0) return "0";
              return `${value / 1000}k`;
            },
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            tickValues: 2,
          }}
          colors={(line) => line.color}
          lineWidth={0.8}
          fill={[{ match: { id: "This year" }, id: "color" }]}
          pointSize={6}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          enableArea={false}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          curve="monotoneX"
          useMesh={true}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#a0aec0",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default TotalUsersChart2;
