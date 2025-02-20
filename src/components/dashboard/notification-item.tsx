interface NotificationItemProps {
  icon: React.ReactNode;
  message: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  icon,
  message,
  time,
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E3F5FF]">
        {icon}
      </div>
      <div className="font-inter">
        <p className="text-sm font-light">{message}</p>
        <p className="text-xs text-[#1C1C1C66]">{time}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
