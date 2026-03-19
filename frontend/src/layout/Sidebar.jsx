import React from "react";
import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";
import { COLORS, STYLES } from "../constants/colors";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        minHeight: "100vh",
        background: COLORS.bg.sidebar,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        boxShadow: `inset -1px 0 0 ${COLORS.border.glow}`,
        borderRight: `1px solid ${COLORS.border.light}`,
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
