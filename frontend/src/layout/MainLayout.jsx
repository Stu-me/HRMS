import React from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f6fa' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem 3rem' }}>
        {children}
      </main>
    </div>
  );
}
