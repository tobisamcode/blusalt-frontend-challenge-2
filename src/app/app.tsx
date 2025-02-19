import DashboardLayout from "@/components/dashboard-layout";
import AdministrationPage from "@/pages/administration";
import AuditPage from "@/pages/audit";
import CustomersPage from "@/pages/customers";
import DashboardPage from "@/pages/dashboard";
import KycPage from "@/pages/kyc";
import ReportsPage from "@/pages/reports";
import RequestsPage from "@/pages/requests";
import SettingsPage from "@/pages/settings";
import TasksPage from "@/pages/tasks";
import UsersPage from "@/pages/users";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard Layout Wrapper */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/kyc" element={<KycPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
