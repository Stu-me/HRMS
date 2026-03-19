import { useState } from "react";
import { markAttendance } from "../services/api";
import { COLORS, STYLES } from "../constants/colors";
import { toast } from "react-hot-toast";

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

    try {
      await markAttendance(form);
      toast.success("Attendance marked successfully!", {
        style: { background: '#dcfce7', color: '#166534', fontWeight: 'bold' }
      });
      setForm({
        employeeId: "",
        date: "",
        status: "Present"
      });
    } catch (error) {
      toast.error("Error marking attendance", {
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
        maxWidth: '32rem',
        marginBottom: '1.5rem',
      }}
    >
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 18, color: COLORS.text.accent }}>
        Mark Attendance
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
        type="date"
        name="date"
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 12, 
          width: '100%' 
        }}
        value={form.date}
        onChange={handleChange}
        required
      />
      <select
        name="status"
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 18, 
          width: '100%' 
        }}
        value={form.status}
        onChange={handleChange}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button
        type="submit"
        style={{ 
          ...STYLES.buttonBase,
          background: COLORS.status.success, 
          color: COLORS.bg.darker, 
          width: '100%',
        }}
      >
        Submit
      </button>
    </form>
  );
}