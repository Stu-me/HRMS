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
    <div style={{ background: 'linear-gradient(135deg, #23272f 0%, #2d3748 100%)', color: '#f3f4f6', borderRadius: 12, boxShadow: '0 2px 12px 0 rgba(36, 37, 38, 0.18)', padding: '1.5rem', maxWidth: '28rem', margin: '0 auto' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 18, color: '#60a5fa' }}>Attendance Calendar</h3>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <span style={{ fontWeight: 600 }}>Status for {selectedDate.toLocaleDateString()}: </span>
        {selectedStatus ? (
          <span style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: 999, fontWeight: 'bold', background: '#374151', color: '#f3f4f6' }}>
            {selectedStatus}
          </span>
        ) : (
          <span style={{ color: '#64748b' }}>No record</span>
        )}
      </div>
    </div>
  );
}
