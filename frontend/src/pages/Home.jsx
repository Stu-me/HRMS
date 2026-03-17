// Home.jsx - Simple landing page for HRMS
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: '2rem',
        background: 'linear-gradient(135deg, #23272f 0%, #2d3748 100%)', // professional dark gradient
        borderRadius: 18,
        boxShadow: '0 4px 24px 0 rgba(36, 37, 38, 0.18)',
        color: '#f3f4f6',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: 16,
          color: '#f3f4f6',
          letterSpacing: 1,
        }}
      >
        Welcome to <span style={{ color: '#60a5fa' }}>HRMS</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 32, color: '#cbd5e1' }}>
        This Human Resource Management System (HRMS) helps you manage employees and attendance efficiently.<br />
        <span style={{ color: '#60a5fa', fontWeight: 500 }}>Use the dashboard on the left to navigate between features.</span>
      </p>
      <section style={{ marginBottom: 32, background: 'rgba(36, 37, 38, 0.7)', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px 0 rgba(36, 37, 38, 0.12)' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 12, color: '#60a5fa' }}>1. Employee Management</h2>
        <ul style={{ marginLeft: 24, marginBottom: 8, listStyle: 'disc', color: '#cbd5e1', fontSize: '1.08rem' }}>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#2563eb', fontWeight: 500 }}>Add</span> a new employee with <b>Employee ID (unique)</b>, <b>Full Name</b>, <b>Email Address</b>, and <b>Department</b></li>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#059669', fontWeight: 500 }}>View</span> a list of all employees</li>
          <li><span style={{ color: '#ef4444', fontWeight: 500 }}>Delete</span> an employee</li>
        </ul>
      </section>
      <section style={{ background: 'rgba(36, 37, 38, 0.7)', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 8px 0 rgba(36, 37, 38, 0.12)' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 12, color: '#60a5fa' }}>2. Attendance Management</h2>
        <ul style={{ marginLeft: 24, listStyle: 'disc', color: '#cbd5e1', fontSize: '1.08rem' }}>
          <li style={{ marginBottom: 6 }}><span style={{ color: '#2563eb', fontWeight: 500 }}>Mark</span> attendance for an employee with <b>Date</b> and <b>Status (Present / Absent)</b></li>
          <li><span style={{ color: '#059669', fontWeight: 500 }}>View</span> attendance records for each employee</li>
        </ul>
      </section>
    </div>
  );
}
