import EmployeeAttendanceCalendar from './EmployeeAttendanceCalendar';

export default function EmployeeIdCalendarInput({ calendarEmployeeId, setCalendarEmployeeId }) {
  return (
    <div style={{ marginTop: 24 }}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#f3f4f6' }}>View Calendar for Employee ID:</label>
      <input
        style={{ background: '#23272f', color: '#f3f4f6', border: '1px solid #374151', padding: '0.5rem', borderRadius: 6, marginBottom: 12, width: '100%' }}
        placeholder="Enter Employee ID"
        value={calendarEmployeeId}
        onChange={e => setCalendarEmployeeId(e.target.value)}
      />
      {calendarEmployeeId && (
        <EmployeeAttendanceCalendar employeeId={calendarEmployeeId} />
      )}
    </div>
  );
}
