// SidebarNav.jsx - Navigation links for the sidebar
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS, TRANSPARENCY } from "../constants/colors";

// Simple SVG icons for sidebar
const EmployeeIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
);
const AttendanceIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);
// Home icon (house)
const HomeIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 12L12 5l9 7" />
    <path d="M9 21V9h6v12" />
    <path d="M21 21H3" />
  </svg>
);

function SidebarLink({ to, active, icon, children }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0.75rem 1rem",
        borderRadius: 8,
        color: active ? COLORS.text.accent : "#b3c6e0",
        background: active ? TRANSPARENCY.mediumWhite : "transparent",
        backdropFilter: active ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: active ? 'blur(8px)' : 'none',
        fontWeight: active ? 700 : 500,
        textDecoration: "none",
        fontSize: 16,
        transition: "all 0.2s ease",
        border: active ? `1px solid ${COLORS.border.glow}` : 'none',
      }}
    >
      {icon}
      {children}
    </Link>
  );
}

export default function SidebarNav() {
  const location = useLocation();
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SidebarLink
        to="/"
        active={location.pathname === "/"}
        icon={<HomeIcon />}
      >
        HOME
      </SidebarLink>

      <SidebarLink
        to="/employees"
        active={location.pathname === "/employees"}
        icon={<EmployeeIcon />}
      >
        Employees
      </SidebarLink>
      <SidebarLink
        to="/attendance"
        active={location.pathname === "/attendance"}
        icon={<AttendanceIcon />}
      >
        Attendance
      </SidebarLink>
    </nav>
  );
}
