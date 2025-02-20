import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar, { MENU_ITEMS } from "./side-bar";
import TopHeader from "./top-header";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const currentPage =
    MENU_ITEMS.find((item) => item.path === location.pathname)?.label ||
    "Dashboard";

  return (
    <div className="flex h-screen">
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className={`flex flex-col flex-1 transition-all ${isSidebarOpen ? "ml-64" : "ml-16 md:ml-16 sm:ml-0"}`}
      >
        <TopHeader
          pageTitle={currentPage}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main
          className={`flex-1 overflow-y-auto p-6 mt-16 ${isSidebarOpen ? "ml-0" : "ml-16 md:ml-8 sm:ml-0"}`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
