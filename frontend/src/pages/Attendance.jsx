
import AttendanceForm from "../components/AttendanceForm";
import EmployeeIdCalendarInput from "../components/EmployeeIdCalendarInput";
import { useState, useEffect } from "react";
import { COLORS, STYLES } from "../constants/colors";
import { getAttendance } from "../services/api";

export default function Attendance() {
  const [calendarEmployeeId, setCalendarEmployeeId] = useState("");
  const [stats, setStats] = useState({ totalRecords: 0, presentToday: 0, absentToday: 0 });

  useEffect(() => {
    // Load attendance stats for today
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      // This is a placeholder - you'd need an API endpoint to get proper stats
      // For now, we'll show the structure
      setStats({
        totalRecords: 0,
        presentToday: 0,
        absentToday: 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const StatCard = ({ title, value, color, icon }) => (
    <div
      style={{
        background: COLORS.bg.glass,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `2px solid ${color}`,
        borderRadius: 12,
        padding: '1.5rem',
        flex: 1,
        minWidth: '200px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: STYLES.shadowMd,
      }}
    >
      <div
        style={{
          fontSize: '2.5rem',
          opacity: 0.6,
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{ color: COLORS.text.secondary, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
          {title}
        </p>
        <p style={{ color: color, fontSize: '1.8rem', fontWeight: 'bold' }}>
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Header */}
      <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: COLORS.text.primary }}>
          Attendance Management
        </h1>

        {/* Stats Cards */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <StatCard
            title="Total Records"
            value={stats.totalRecords}
            color={COLORS.text.accent}
            icon="📊"
          />
          <StatCard
            title="Present Today"
            value={stats.presentToday}
            color={COLORS.status.success}
            icon="✓"
          />
          <StatCard
            title="Absent Today"
            value={stats.absentToday}
            color={COLORS.status.error}
            icon="✕"
          />
        </div>

        {/* Main Content - Form and Calendar Side by Side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column - Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <AttendanceForm />
          </div>

          {/* Right Column - Calendar and Instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <EmployeeIdCalendarInput 
              calendarEmployeeId={calendarEmployeeId} 
              setCalendarEmployeeId={setCalendarEmployeeId} 
            />

            {/* Information Card */}
            <div
              style={{
                background: COLORS.bg.glass,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `2px solid ${COLORS.border.light}`,
                borderRadius: 12,
                padding: '1.5rem',
                boxShadow: STYLES.shadowMd,
              }}
            >
              <h3 style={{ color: COLORS.text.accent, fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.1rem' }}>
                📋 Quick Tips
              </h3>
              <ul style={{ color: COLORS.text.secondary, fontSize: '0.9rem', lineHeight: '1.6', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Mark attendance using the form on the left</li>
                <li style={{ marginBottom: '0.5rem' }}>• View attendance history by entering Employee ID</li>
                <li style={{ marginBottom: '0.5rem' }}>• Green dates = Present, Red dates = Absent</li>
                <li style={{ marginBottom: '0.5rem' }}>• Calendar updates in real-time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Section */}
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <div
          style={{
            background: 'rgba(62, 166, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: `2px solid ${COLORS.border.glow}`,
            borderRadius: 12,
            padding: '2rem',
            boxShadow: STYLES.shadowMd,
          }}
        >
          <h3 style={{ color: COLORS.text.accent, fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.2rem' }}>
            📅 Today's Summary
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: COLORS.text.secondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Date</p>
              <p style={{ color: COLORS.text.primary, fontSize: '1.3rem', fontWeight: 'bold' }}>
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: COLORS.text.secondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Day</p>
              <p style={{ color: COLORS.text.primary, fontSize: '1.3rem', fontWeight: 'bold' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: COLORS.text.secondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Status</p>
              <p style={{ color: COLORS.status.info, fontSize: '1.3rem', fontWeight: 'bold' }}>
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}