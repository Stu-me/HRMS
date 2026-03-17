import React from "react";
import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1e2a3a 0%, #23395d 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        boxShadow: "2px 0 8px rgba(0,0,0,0.07)",
        padding: "2.5rem 1.5rem 1.5rem 1.5rem",
      }}
    >
      <SidebarBrand />
      <SidebarNav />
      <div style={{ flex: 1 }} />
      <SidebarFooter />
    </aside>
  );
}
