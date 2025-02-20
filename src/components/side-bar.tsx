import React from "react";
import { NavLink } from "react-router-dom";
import { HiSquares2X2 } from "react-icons/hi2";
import { VscSearchStop } from "react-icons/vsc";
import { Settings } from "lucide-react";
import { RiTimerFlashLine, RiUser3Line } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { SiLibreoffice } from "react-icons/si";
import { PiUserCircleLight } from "react-icons/pi";
import { GoLink, GoTasklist } from "react-icons/go";

export const MENU_ITEMS = [
  { label: "Dashboard", icon: HiSquares2X2, path: "/" },
  { label: "Requests", icon: RiTimerFlashLine, path: "/requests" },
  { label: "KYC", icon: VscSearchStop, path: "/kyc" },
  { label: "Reports", icon: TbFileReport, path: "/reports" },
  { label: "Tasks", icon: GoTasklist, path: "/tasks" },
  { label: "Audit Trail", icon: GoLink, path: "/audit" },
  { label: "Customers", icon: RiUser3Line, path: "/customers" },
  { label: "Users", icon: PiUserCircleLight, path: "/users" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Administration", icon: SiLibreoffice, path: "/administration" },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r border-[#F0ECEC] transition-all duration-300 pt-6 ${isOpen ? "md:px-8" : "md:px-6"} flex flex-col  ${
        isOpen ? "w-64" : "w-0 md:w-24"
      }`}
    >
      <div className="">
        {isOpen && <img className="" src="svg/logo.svg" alt="Logo" />}

        {/* Navigation Items */}
        <nav className="mt-12">
          <ul className="space-y-3">
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className={``}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-start text-sm  ${isOpen ? "space-x-2 p-3 rounded-lg" : "py-3"} cursor-pointer ${
                      isActive
                        ? "bg-gray-100 text-black font-medium"
                        : "hover:bg-gray-50 text-[#292D32] font-light"
                    } 
                    ${
                      !isOpen ? "justify-center  rounded-full" : " rounded-full"
                    }
                    `
                  }
                >
                  {<item.icon size={18} />}
                  {isOpen && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto mb-6 flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-md p-2">
        <img
          className="rounded-full size-7"
          src="svg/avatar.svg"
          alt="avatar"
        />
        {isOpen && <p className="font-light text-xs">ByeWind</p>}
      </div>
    </aside>
  );
};

export default SideBar;
