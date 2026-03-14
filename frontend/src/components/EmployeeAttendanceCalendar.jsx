import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getAttendance } from "../services/api";
import { toast } from "react-hot-toast";

const STATUS_COLORS = {
  Present: "bg-green-200 text-green-900 font-bold",
  Absent: "bg-red-200 text-red-900 font-bold",
  Leave: "bg-yellow-200 text-yellow-900 font-bold",
  "Half Day": "bg-blue-200 text-blue-900 font-bold",
  "Work From Home": "bg-purple-200 text-purple-900 font-bold",
  Holiday: "bg-gray-300 text-gray-700 font-bold"
};

export default function EmployeeAttendanceCalendar({ employeeId }) {
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    if (employeeId) {
      getAttendance(employeeId)
        .then((res) => {
          setAttendance(res.data || []);
          toast.success("Attendance loaded!", { style: { background: '#e0ffe0', color: '#234', fontWeight: 'bold' } });
        })
        .catch((err) => {
          toast.error("Failed to fetch attendance!", { style: { background: '#ffebeb', color: '#b91c1c', fontWeight: 'bold' } });
        });
    }
  }, [employeeId]);

  useEffect(() => {
    // Find status for selected date
    const dateStr = selectedDate.toISOString().split("T")[0];
    const record = attendance.find((a) => a.date === dateStr);
    setSelectedStatus(record ? record.status : null);
  }, [selectedDate, attendance]);

  // Mark attendance days
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      const record = attendance.find((a) => a.date === dateStr);
      if (record && STATUS_COLORS[record.status]) {
        return STATUS_COLORS[record.status];
      }
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded shadow max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-[#23395d]">Attendance Calendar</h3>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <div className="mt-6 text-center">
        <span className="font-semibold">Status for {selectedDate.toLocaleDateString()}: </span>
        {selectedStatus ? (
          <span className="inline-block px-3 py-1 rounded-full font-bold" style={{ background: 'var(--tw-bg-opacity)' }}>
            {selectedStatus}
          </span>
        ) : (
          <span className="text-gray-500">No record</span>
        )}
      </div>
    </div>
  );
}
