// Home.jsx - Simple landing page for HRMS
import React from "react";

export default function Home() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 16 }}>Welcome to HRMS</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 32 }}>
        This Human Resource Management System (HRMS) helps you manage employees and attendance efficiently. Use the dashboard to navigate between features.
      </p>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 8 }}>1. Employee Management</h2>
        <ul style={{ marginLeft: 24, marginBottom: 8 }}>
          <li>Add a new employee with Employee ID (unique), Full Name, Email Address, and Department</li>
          <li>View a list of all employees</li>
          <li>Delete an employee</li>
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 8 }}>2. Attendance Management</h2>
        <ul style={{ marginLeft: 24 }}>
          <li>Mark attendance for an employee with Date and Status (Present / Absent)</li>
          <li>View attendance records for each employee</li>
        </ul>
      </section>
    </div>
  );
}
