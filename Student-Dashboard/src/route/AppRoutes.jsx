import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";

import Loader from "../components/Loader";

const Login = lazy(() => import("../pages/Login"));

const Dashboard = lazy(() => import("../pages/Dashboard"));

const Students = lazy(() => import("../pages/Students"));

const Profile = lazy(() => import("../pages/Profile"));

const Settings = lazy(() => import("../pages/Settings"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Login */}

          <Route path="/" element={<Login />} />

          {/* Dashboard Layout */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* /dashboard */}

            <Route index element={<DashboardHome />} />

            {/* /dashboard/students */}

            <Route path="students" element={<Students />} />

            {/* /dashboard/profile */}

            <Route path="profile" element={<Profile />} />

            {/* /dashboard/settings */}

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Dashboard Home Component

function DashboardHome() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <p>Manage your students and profile from here.</p>
    </div>
  );
}
