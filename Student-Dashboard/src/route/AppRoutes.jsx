import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";

import Loader from "../components/Loader";

const Login = lazy(() => import("../pages/Login"));

const Dashboard = lazy(() => import("../pages/Dashboard"));

const Students = lazy(() => import("../pages/Students"));
const Profile = lazy(()=>import("../pages/Profile"));
const Settings = lazy(()=>import("../pages/Settings"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Login Route */}

          <Route path="/" element={<Login />} />

          {/* Dashboard Protected Route */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="students" replace/>}></Route>
            
            <Route path="students" element={<Students />}>
          </Route>
          <Route path="profile" element={<Profile />}>
          </Route>

          <Route path="settings" element={<Settings />}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
