import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { month: "Jan", value: 12000, color: "#818CF8" }, // Purple
  { month: "Feb", value: 23000, color: "#86EFAC" }, // Green
  { month: "Mar", value: 18000, color: "#000000" }, // Black
  { month: "Apr", value: 27000, color: "#93C5FD" }, // Light Blue
  { month: "May", value: 10000, color: "#A0AEC0" }, // Grayish Blue
  { month: "Jun", value: 20000, color: "#86EFAC" }, // Green
  { month: "Jul", value: 12000, color: "#818CF8" }, // Purple
  { month: "Aug", value: 23000, color: "#86EFAC" }, // Green
  { month: "Sep", value: 18000, color: "#000000" }, // Black
  { month: "Oct", value: 27000, color: "#93C5FD" }, // Light Blue
  { month: "Nov", value: 10000, color: "#A0AEC0" }, // Grayish Blue
  { month: "Dec", value: 20000, color: "#86EFAC" }, // Green
];

const MarketingSEOChart: React.FC = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-[16px] flex-grow">
      <h4 className="text-sm font-inter mb-4">Marketing & SEO</h4>

      <div className="h-72">
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="month"
          margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
          padding={0.5}
          borderRadius={10}
          valueScale={{ type: "linear" }}
          colors={(bar) => bar.data.color}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#a0aec0",
                },
              },
            },
          }}
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
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 3,
          }}
          enableGridY={false}
          enableLabel={false}
          tooltip={({ id, value, color }) => (
            <div className="px-3 py-2 bg-white shadow-md rounded-md text-sm">
              <span style={{ color }} className="font-semibold">
                {id}:
              </span>{" "}
              {value.toLocaleString()}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MarketingSEOChart;
