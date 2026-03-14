import { useState } from "react";
import AttendancePanel from "../components/AttendancePanel";

export default function Attendance() {
  // State for employeeId input for calendar
  const [calendarEmployeeId, setCalendarEmployeeId] = useState("");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AttendancePanel
            calendarEmployeeId={calendarEmployeeId}
            setCalendarEmployeeId={setCalendarEmployeeId}
          />
        </div>
      </div>
    </div>
  );
}