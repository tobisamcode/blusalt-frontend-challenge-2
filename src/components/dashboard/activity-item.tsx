interface ActivityItemProps {
  avatar: string;
  message: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  avatar,
  message,
  time,
}) => {
  return (
    <div className="flex space-x-3 items-start">
      <img src={avatar} alt="User" className="w-6 h-6 rounded-full" />
      <div>
        <p className="text-sm font-inter font-light ">{message}</p>
        <p className="text-xs text-[#1C1C1C66]">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
