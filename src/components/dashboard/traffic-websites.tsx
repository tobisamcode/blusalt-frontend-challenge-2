const trafficData = [
  { platform: "Google", levels: [30, 20, 10] },
  { platform: "YouTube", levels: [40, 30, 20] },
  { platform: "Instagram", levels: [25, 20, 15] },
  { platform: "Pinterest", levels: [50, 30, 20] },
  { platform: "Facebook", levels: [15, 10, 5] },
  { platform: "Twitter", levels: [25, 20, 10] },
];

const TrafficByWebsite: React.FC = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-[16px] flex-grow">
      <h4 className="text-sm font-medium mb-8">Traffic by Website</h4>

      <ul className="flex flex-col justify-between h-[80%]">
        {trafficData.map((item, index) => (
          <li key={index} className="flex items-center  font-inter space-x-4">
            <span className="text-xs font-light w-1/3">{item.platform}</span>

            <div className="flex justify-self-start space-x-1">
              {item.levels.map((width, idx) => (
                <span
                  key={idx}
                  className="h-[2.33px] rounded-full"
                  style={{
                    width: `${width}px`,
                    backgroundColor:
                      idx === 0 ? "#000" : idx === 1 ? "#A0AEC0" : "#E2E8F0",
                  }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficByWebsite;
