// SidebarFooter.jsx - Footer for the sidebar
import React from "react";

export default function SidebarFooter() {
  return (
    <div
      style={{
        fontSize: 13,
        color: "#b3c6e0",
        marginTop: 32,
        textAlign: "center",
      }}
    >
      <span>© {new Date().getFullYear()} HRMS</span>
    </div>
  );
}
