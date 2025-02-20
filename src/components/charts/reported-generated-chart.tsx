import { ResponsiveBar } from "@nivo/bar";

const data = [
  { name: "Linux", value: 12000, color: "#818CF8" },
  { name: "Mac", value: 23000, color: "#86EFAC" },
  { name: "iOS", value: 18000, color: "#000000" },
  { name: "Windows", value: 27000, color: "#93C5FD" },
  { name: "Android", value: 10000, color: "#A0AEC0" },
  { name: "Other", value: 20000, color: "#86EFAC" },
];

const ReportsGeneratedChart: React.FC = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-[16px] flex-grow">
      <h4 className="text-sm font-inter mb-4">Reports Generated</h4>

      <div className="h-64">
        <ResponsiveBar
          data={data}
          keys={["value"]}
          indexBy="name"
          margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
          padding={0.45}
          valueScale={{ type: "linear" }}
          colors={(bar) => bar.data.color}
          borderRadius={10}
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

export default ReportsGeneratedChart;
