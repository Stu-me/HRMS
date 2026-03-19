// Home.jsx - Simple landing page for HRMS
import React from "react";
import { COLORS, STYLES } from "../constants/colors";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: '2rem',
        background: COLORS.bg.glass,
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: `1px solid ${COLORS.border.light}`,
        borderRadius: 16,
        boxShadow: STYLES.shadowXl,
        color: COLORS.text.primary,
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: 16,
          color: COLORS.text.primary,
          letterSpacing: 1,
        }}
      >
        Welcome to <span style={{ color: COLORS.text.accent }}>HRMS</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 32, color: COLORS.text.secondary }}>
        This Human Resource Management System (HRMS) helps you manage employees and attendance efficiently.<br />
        <span style={{ color: COLORS.text.accent, fontWeight: 500 }}>Use the dashboard on the left to navigate between features.</span>
      </p>
      <section style={{ marginBottom: 32, background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: 12, padding: '1.5rem', boxShadow: STYLES.shadowMd, border: `1px solid ${COLORS.border.glow}` }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 12, color: COLORS.text.accent }}>1. Employee Management</h2>
        <ul style={{ marginLeft: 24, marginBottom: 8, listStyle: 'disc', color: COLORS.text.secondary, fontSize: '1.08rem' }}>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#2563eb', fontWeight: 500 }}>Add</span> a new employee with <b>Employee ID (unique)</b>, <b>Full Name</b>, <b>Email Address</b>, and <b>Department</b></li>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#059669', fontWeight: 500 }}>View</span> a list of all employees</li>
          <li><span style={{ color: COLORS.status.error, fontWeight: 500 }}>Delete</span> an employee</li>
        </ul>
      </section>
      <section style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: 12, padding: '1.5rem', boxShadow: STYLES.shadowMd, border: `1px solid ${COLORS.border.glow}` }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 12, color: COLORS.text.accent }}>2. Attendance Management</h2>
        <ul style={{ marginLeft: 24, listStyle: 'disc', color: COLORS.text.secondary, fontSize: '1.08rem' }}>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#2563eb', fontWeight: 500 }}>Mark</span> attendance for an employee with <b>Date</b> and <b>Status (Present / Absent)</b></li>
          <li><span style={{ color: '#059669', fontWeight: 500 }}>View</span> attendance records for each employee</li>
        </ul>
      </section>
    </div>
  );
}
