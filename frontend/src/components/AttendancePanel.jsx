import AttendanceForm from './AttendanceForm';
import EmployeeIdCalendarInput from './EmployeeIdCalendarInput';

export default function AttendancePanel({ calendarEmployeeId, setCalendarEmployeeId }) {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mark Attendance</h2>
      <AttendanceForm />
      <EmployeeIdCalendarInput
        calendarEmployeeId={calendarEmployeeId}
        setCalendarEmployeeId={setCalendarEmployeeId}
      />
    </div>
  );
}
