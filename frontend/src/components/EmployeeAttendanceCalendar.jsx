import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getAttendance } from "../services/api";
import { toast } from "react-hot-toast";
import { COLORS, STYLES } from "../constants/colors";

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
  const [employeeInfo, setEmployeeInfo] = useState(null);

  useEffect(() => {
    if (employeeId) {
      getAttendance(employeeId)
        .then((res) => {
          setAttendance(res.data || []);
          toast.success("Attendance loaded!", { style: { background: '#dcfce7', color: '#166534', fontWeight: 'bold' } });
        })
        .catch((err) => {
          toast.error("Failed to fetch attendance!", { style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } });
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

  // Calculate statistics
  const presentCount = attendance.filter(a => a.status === 'Present').length;
  const absentCount = attendance.filter(a => a.status === 'Absent').length;
  const totalDays = attendance.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Calendar Card */}
      <div style={{ background: COLORS.bg.glass, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: COLORS.text.primary, border: `2px solid ${COLORS.border.light}`, borderRadius: 12, boxShadow: STYLES.shadowMd, padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 18, color: COLORS.text.accent }}>📅 Attendance Calendar</h3>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={tileClassName}
        />
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: COLORS.text.secondary }}>Status for {selectedDate.toLocaleDateString()}: </span>
          {selectedStatus ? (
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: 999, fontWeight: 'bold', background: 'rgba(255, 255, 255, 0.12)', color: COLORS.text.accent, border: `1px solid ${COLORS.border.glow}`, marginTop: 8, marginLeft: 8 }}>
              {selectedStatus}
            </span>
          ) : (
            <span style={{ color: COLORS.text.muted, display: 'block', marginTop: 8 }}>−  No record</span>
          )}
        </div>
      </div>

      {/* Attendance Summary Stats */}
      <div style={{ background: 'rgba(96, 165, 250, 0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `2px solid ${COLORS.border.glow}`, borderRadius: 12, padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 12, color: COLORS.text.accent }}>📊 Summary Stats</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: COLORS.text.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Days</p>
            <p style={{ color: COLORS.text.primary, fontSize: '1.8rem', fontWeight: 'bold' }}>{totalDays}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: COLORS.text.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Present</p>
            <p style={{ color: COLORS.status.success, fontSize: '1.8rem', fontWeight: 'bold' }}>{presentCount}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: COLORS.text.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Absent</p>
            <p style={{ color: COLORS.status.error, fontSize: '1.8rem', fontWeight: 'bold' }}>{absentCount}</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ background: COLORS.bg.glass, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${COLORS.border.light}`, borderRadius: 12, padding: '1rem' }}>
        <p style={{ color: COLORS.text.secondary, fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>Legend</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.4)' }}></div>
            <span style={{ color: COLORS.text.secondary }}>Present</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.4)' }}></div>
            <span style={{ color: COLORS.text.secondary }}>Absent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
