import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";

import Loader from "../components/Loader";

const Login = lazy(() => import("../pages/Login"));

const Dashboard = lazy(() => import("../pages/Dashboard"));

const Students = lazy(() => import("../pages/Students"));

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
            <Route index element={<Students />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
