import EmployeeAttendanceCalendar from './EmployeeAttendanceCalendar';

export default function EmployeeIdCalendarInput({ calendarEmployeeId, setCalendarEmployeeId }) {
  return (
    <div className="mt-6">
      <label className="block mb-2 font-medium text-gray-700">View Calendar for Employee ID:</label>
      <input
        className="border p-2 rounded w-full mb-3"
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
