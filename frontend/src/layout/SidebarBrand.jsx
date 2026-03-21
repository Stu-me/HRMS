// SidebarBrand.jsx - Brand/logo section for the sidebar
import React from "react";

export default function SidebarBrand() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 32,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#3ea6ff" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontSize="18"
          fill="white"
          fontWeight="bold"
        >
          HR
        </text>
      </svg>
      <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>
        HRMS
      </span>
    </div>
  );
}
