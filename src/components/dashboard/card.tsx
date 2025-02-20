import { ArrowDownSvg, ArrowUpSvg } from "../svg/arrow-svg";

export interface CardProps {
  title: string;
  value: string;
  percentage: string;
  purpleBg?: boolean;
  type: "up" | "down";
}

export default function Card({
  title,
  value,
  percentage,
  purpleBg = false,
  type,
}: CardProps) {
  return (
    <div
      className={`rounded-[16px] p-6 ${!purpleBg ? "bg-[#E3F5FF]" : "bg-[#E5ECF6]"} `}
    >
      <div className="flex flex-col space-y-6">
        <p className="font-light text-xs font-inter ">{title}</p>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-inter font-medium tracking-widest">
            {value}
          </p>

          <div className="flex gap-2 items-center">
            <p className="text-xs font-inter font-light">{percentage}%</p>
            {type === "up" && <ArrowUpSvg />}
            {type === "down" && <ArrowDownSvg />}
          </div>
        </div>
      </div>
    </div>
  );
}
