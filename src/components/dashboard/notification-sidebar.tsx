import React from "react";
import { Bug, UserPlus, Wifi } from "lucide-react";
import NotificationItem from "./notification-item";
import ContactItem from "./contact-item";
import ActivityItem from "./activity-item";

const notifications = [
  { icon: <Bug size={13} />, message: "You fixed a bug.", time: "Just now" },
  {
    icon: <UserPlus size={13} />,
    message: "New user registered.",
    time: "59 minutes ago",
  },
  {
    icon: <Bug size={13} />,
    message: "You fixed a bug.",
    time: "12 hours ago",
  },
  {
    icon: <Wifi size={13} />,
    message: "Andi Lane subscribed.",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    avatar: "/img/act-1.png",
    message: "Changed the style.",
    time: "Just now",
  },
  {
    avatar: "/img/act-2.png",
    message: "Released a new version.",
    time: "59 minutes ago",
  },
  {
    avatar: "/img/act-3.png",
    message: "Submitted a bug.",
    time: "12 hours ago",
  },
  {
    avatar: "/img/act-4.png",
    message: "Modified data in Page X.",
    time: "Today, 11:59 AM",
  },
  {
    avatar: "/img/act-5.png",
    message: "Deleted a page in Project.",
    time: "Feb 2, 2024",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "/img/contact-1.png" },
  { name: "Drew Cano", avatar: "/img/contact-2.png" },
  { name: "Andi Lane", avatar: "/img/contact-3.png" },
  { name: "Koray Okumus", avatar: "/img/contact-4.png" },
  { name: "Kate Morrison", avatar: "/img/contact-5.png" },
  { name: "Melody Macy", avatar: "/img/contact-6.png" },
];

const NotificationSidebar: React.FC = () => {
  return (
    <div className="p-6 bg-[#FFF8F8] rounded-[30px]">
      <h4 className="text-sm font-inter font-light mb-4">Notifications</h4>
      <div className="space-y-6">
        {notifications.map((item, index) => (
          <NotificationItem key={index} {...item} />
        ))}
      </div>

      <h4 className="text-sm font-inter font-light mt-6 mb-4">Activities</h4>
      <div className="space-y-6">
        {activities.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </div>

      <h4 className="text-sm font-inter font-light mt-6 mb-4">Contacts</h4>
      <div className="space-y-6">
        {contacts.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NotificationSidebar;
