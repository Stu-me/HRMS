import EmployeeAttendanceCalendar from './EmployeeAttendanceCalendar';
import { COLORS, STYLES } from '../constants/colors';

export default function EmployeeIdCalendarInput({ calendarEmployeeId, setCalendarEmployeeId }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div
        style={{
          background: COLORS.bg.glass,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: COLORS.text.primary,
          border: `2px solid ${COLORS.border.light}`,
          boxShadow: STYLES.shadowMd,
          borderRadius: 12,
          padding: '1.5rem',
        }}
      >
        <label style={{ display: 'block', marginBottom: 12, fontWeight: 600, color: COLORS.text.accent, fontSize: '1rem' }}>
          🔍 Search Employee Calendar
        </label>
        <input
          style={{ ...STYLES.inputGlass, marginBottom: 0, width: '100%' }}
          placeholder="Enter Employee ID"
          value={calendarEmployeeId}
          onChange={e => setCalendarEmployeeId(e.target.value)}
        />
      </div>
      {calendarEmployeeId && (
        <div>
          <EmployeeAttendanceCalendar employeeId={calendarEmployeeId} />
        </div>
      )}
    </div>
  );
}
