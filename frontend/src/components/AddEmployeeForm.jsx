import { useState } from "react";
import { createEmployee } from "../services/api";

export default function AddEmployeeForm({ reload }) {
  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form, // keep the existing form
      [e.target.name]: e.target.value, // update only changed field  [] means use the value inside as the key
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // avoids the default value and save the value if refreshed

    await createEmployee(form); //create employee

    reload(); // brings all the employee

    setForm({
      // sets the form to default blank
      employeeId: "",
      name: "",
      email: "",
      department: "",
    });
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
        marginBottom: '1.5rem',
      }}
    >
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 18, color: '#60a5fa' }}>Add Employee</h2>
      <div className="grid grid-cols-2 gap-4"></div>
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        name="employeeId"
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={handleChange}
      />
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 18, width: '100%' }}
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />
      <button
        style={{ background: '#60a5fa', color: '#23272f', fontWeight: 600, border: 'none', borderRadius: 6, padding: '0.6rem 1.2rem', cursor: 'pointer' }}
      >
        Add Employee
      </button>
    </form>
  );
}
