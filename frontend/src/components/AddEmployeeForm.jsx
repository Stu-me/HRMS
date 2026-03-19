import { useState } from "react";
import { createEmployee } from "../services/api";
import { COLORS, STYLES } from "../constants/colors";
import { toast } from "react-hot-toast";

export default function AddEmployeeForm({ reload }) {
  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(form);
      toast.success("Employee added successfully!", {
        style: { background: '#dcfce7', color: '#166534', fontWeight: 'bold' }
      });
      reload();
      setForm({
        employeeId: "",
        name: "",
        email: "",
        department: "",
      });
    } catch (error) {
      toast.error("Error adding employee", {
        style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' }
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: COLORS.bg.glass,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: COLORS.text.primary,
        border: `1px solid ${COLORS.border.light}`,
        boxShadow: STYLES.shadowMd,
        borderRadius: 12,
        padding: '1.5rem',
        marginBottom: '1.5rem',
      }}
    >
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 18, color: COLORS.text.accent }}>
        Add Employee
      </h2>
      <input
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 12, 
          width: '100%' 
        }}
        name="employeeId"
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={handleChange}
        required
      />
      <input
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 12, 
          width: '100%' 
        }}
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 12, 
          width: '100%' 
        }}
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 18, 
          width: '100%' 
        }}
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        style={{ 
          ...STYLES.buttonBase,
          background: COLORS.text.accent, 
          color: COLORS.bg.darker,
          width: '100%',
        }}
      >
        Add Employee
      </button>
    </form>
  );
}
