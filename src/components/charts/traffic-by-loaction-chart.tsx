import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "Nigeria", value: 38.6, color: "#000000" }, // Black
  { id: "Ghana", value: 22.5, color: "#86EFAC" }, // Green
  { id: "Kenya", value: 30.8, color: "#93C5FD" }, // Light Blue
  { id: "Benin Republic", value: 8.1, color: "#A0AEC0" }, // Grayish Blue
];

const TrafficByLocationChart: React.FC = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-[16px] flex-grow">
      <h4 className="text-sm font-inter mb-4">Traffic by Location</h4>

      <div className="flex items-center space-x-16 h-full ">
        <div className="h-40 w-40 ">
          <ResponsivePie
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.6}
            padAngle={2}
            cornerRadius={5}
            colors={(d) => d.data.color}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
          />
        </div>

        {/* Legend */}
        <ul className="space-y-4 flex-1">
          {data.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span className="flex items-center space-x-2 text-xs font-light">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.id}</span>
              </span>
              <span className="font-light font-inter text-xs">
                {item.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrafficByLocationChart;
