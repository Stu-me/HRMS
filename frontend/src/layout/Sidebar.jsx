import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #23395d, #406080)',
      color: 'white',
      padding: 'rem 1rem',
      boxShadow: '2px 0 8px rgba(0,0,0,0.07)'
    }}>
        <h1>look here  ---------------</h1>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>HRMS Dashboard</h2>
        <p style={{ color: '#b3c6e0', fontSize: '0.95rem' }}>Quick access to HR features</p>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/employees" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Employees</Link>
        <Link to="/attendance" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Attendance</Link>
      </nav>
    </aside>
  );
}
