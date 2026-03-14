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
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
      <h2 className="">Add Employee</h2>

      <div className="grid grid-cols-2 gap-4"></div>

      <input
        className="border p-2 rounded"
        name="employeeId"
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={handleChange}
      />

      <input
        className="border p-2 rounded"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />

      <button>Add Employee</button>

    </form>
  );
}
