import Card, { CardProps } from "@/components/dashboard/card";
import MarketingSEOChart from "@/components/charts/marketing-seo-chart";
import ReportsGeneratedChart from "@/components/charts/reported-generated-chart";
import TotalUsersChart from "@/components/charts/total-user-chart";
import TotalUsersChart2 from "@/components/charts/total-user-chart-2";
import TrafficByLocationChart from "@/components/charts/traffic-by-loaction-chart";
import TrafficByWebsite from "@/components/dashboard/traffic-websites";
import NotificationSidebar from "@/components/dashboard/notification-sidebar";

const cardDat: CardProps[] = [
  { title: "Tasks", value: "7,235", percentage: "+113.02", type: "up" },
  {
    title: "Requests",
    value: "235",
    percentage: "+11.02",
    type: "up",
    purpleBg: true,
  },
  { title: "KYC", value: "1,235", percentage: "-0.02", type: "down" },
  {
    title: "Reports",
    value: "735",
    percentage: "+16.02",
    type: "up",
    purpleBg: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-white flex space-x-4 mt-4">
      <div className="w-3/4 flex flex-col space-y-6">
        {/* CARDS */}
        <div className="grid grid-cols-4 gap-4">
          {cardDat.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 h-full">
          <div className="col-span-3 flex flex-col h-full">
            {/* TOTAL USERS CHART */}
            <TotalUsersChart2 />
          </div>

          <div className="col-span-1 flex flex-col h-full">
            <TrafficByWebsite />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="col-span-1 flex flex-col h-full">
            <ReportsGeneratedChart />
          </div>

          <div className="col-span-1 flex flex-col h-full">
            <TrafficByLocationChart />
          </div>
        </div>

        <div className="w-full">
          <MarketingSEOChart />
        </div>

        {/* TOP USERS CHARTS */}
      </div>

      <div className="w-1/4">
        <NotificationSidebar />
      </div>
    </div>
  );
}
