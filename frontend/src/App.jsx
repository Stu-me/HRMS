// Import all necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// MainLayout provides the sidebar/dashboard and main content area
import MainLayout from "./layout/MainLayout";
// Page components for different routes
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";


// The App component sets up routing and layout for the entire HRMS frontend
// This is the entry point for all navigation and page rendering
export default function App() {
  return (
    // BrowserRouter enables client-side routing for the app
    <BrowserRouter>
      {/* MainLayout wraps all pages with a sidebar/dashboard and main content */}
      <MainLayout>
        {/* Define all routes for the app here */}
        <Routes>
          {/* Employees page route */}
          <Route path="/employees" element={<Employees />} />
          {/* Attendance page route */}
          <Route path="/attendance" element={<Attendance />} />
          {/* Redirect any unknown route to Employees page */}
          <Route path="*" element={<Navigate to="/employees" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}