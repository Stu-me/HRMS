import { useState } from "react";
import { markAttendance } from "../services/api";

export default function AttendanceForm() {

  const [form, setForm] = useState({
    employeeId: "",
    date: "",
    status: "Present"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await markAttendance(form);

    alert("Attendance saved");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'linear-gradient(135deg, #23272f 0%, #2d3748 100%)',
        color: '#f3f4f6',
        boxShadow: '0 2px 12px 0 rgba(36, 37, 38, 0.18)',
        borderRadius: 12,
        padding: '1.5rem',
        maxWidth: '32rem',
        marginBottom: '1.5rem',
      }}
    >
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 18, color: '#60a5fa' }}>
        Mark Attendance
      </h2>
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        name="employeeId"
        placeholder="Employee ID"
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        onChange={handleChange}
      />
      <select
        name="status"
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 18, width: '100%' }}
        onChange={handleChange}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button
        style={{ background: '#22c55e', color: '#23272f', fontWeight: 600, border: 'none', borderRadius: 6, padding: '0.6rem 1.2rem', cursor: 'pointer' }}
      >
        Submit
      </button>
    </form>
  );
}