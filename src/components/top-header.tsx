import React from "react";
import {
  Search,
  Bell,
  Moon,
  User,
  Menu,
  Sun,
  Command,
  History,
  PanelsTopLeft,
} from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  pageTitle: string;
}

const TopHeader: React.FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  pageTitle,
}) => {
  return (
    <header
      className={`fixed top-0 bg-white border-b border-[#F0ECEC]  px-8 flex items-center justify-between h-20 transition-all ${
        isSidebarOpen ? "left-64 right-0" : "left-24 right-0"
      }`}
    >
      <div className="text-xl font-medium hidden md:block">{pageTitle}</div>

      <div className="flex space-x-8 ">
        <div className="hidden md:flex gap-0 items-center bg-black/5 px-3 rounded-lg w-60">
          <Search className="size-4  text-black/20 font-extralight" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-black/20 text-sm outline-none focus:border-none focus:ring-0 border-none placeholder:text-black/20"
          />
          <Command className="size-4  text-black/20 font-extralight" />
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hidden md:block rounded-full hover:bg-gray-100 transition">
            <Sun className="size-4" />
          </button>
          <button className="p-2 hidden md:block rounded-full hover:bg-gray-100 transition">
            <History className="size-4" />
          </button>
          <button className="p-2 hidden md:block rounded-full hover:bg-gray-100 transition">
            <Bell className="size-4" />
          </button>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <PanelsTopLeft className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
