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
      className="bg-white shadow p-4 rounded max-w-lg"
    >

      <h2 className="text-lg font-semibold mb-4">
        Mark Attendance
      </h2>

      <input
        className="border p-2 rounded w-full mb-3"
        name="employeeId"
        placeholder="Employee ID"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        className="border p-2 rounded w-full mb-3"
        onChange={handleChange}
      />

      <select
        name="status"
        className="border p-2 rounded w-full mb-3"
        onChange={handleChange}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

    </form>
  );
}