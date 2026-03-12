import { useState } from "react";
import { createEmployee } from "../services/api";

export default function AddEmployeeForm({ reload }) {

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createEmployee(form);

    reload();

    setForm({
      employeeId: "",
      name: "",
      email: "",
      department: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded mb-6"
    >

      <h2 className="text-lg font-semibold mb-4">
        Add Employee
      </h2>

      <div className="grid grid-cols-2 gap-4">

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
          className="border p-2 rounded"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

      </div>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>

    </form>
  );
}