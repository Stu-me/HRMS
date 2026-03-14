import { useState } from "react";
import { markAttendance } from "../services/api";
import { UserIcon, CalendarDaysIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

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
      className="space-y-5 max-w-lg"
    >
      {/* Employee ID */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          <UserIcon className="h-5 w-5 text-indigo-500" /> Employee ID
        </label>
        <input
          className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 rounded w-full transition mb-1"
          name="employeeId"
          placeholder="Enter Employee ID"
          onChange={handleChange}
          value={form.employeeId}
          required
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          <CalendarDaysIcon className="h-5 w-5 text-indigo-500" /> Date
        </label>
        <input
          type="date"
          name="date"
          className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 rounded w-full transition mb-1"
          onChange={handleChange}
          value={form.date}
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          <CheckCircleIcon className="h-5 w-5 text-indigo-500" /> Status
        </label>
        <select
          name="status"
          className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 rounded w-full transition mb-1"
          onChange={handleChange}
          value={form.status}
          required
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Leave">Leave</option>
          <option value="Half Day">Half Day</option>
          <option value="Work From Home">Work From Home</option>
          <option value="Holiday">Holiday</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 flex items-center justify-center gap-2"
      >
        <CheckCircleIcon className="h-5 w-5" /> Submit
      </button>
    </form>
  );
}