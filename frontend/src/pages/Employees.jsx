import { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeForm from '../components/AddEmployeeForm';
import AttendancePanel from '../components/AttendancePanel';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [activeView, setActiveView] = useState('employees'); // 'employees', 'add', or 'attendance'

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // For demo: allow user to enter employeeId and see calendar for that ID
  const [calendarEmployeeId, setCalendarEmployeeId] = useState("");

  const renderContent = () => {
    switch (activeView) {
      case 'add':
        return <AddEmployeeForm reload={() => { loadEmployees(); setActiveView('employees'); }} />;
      case 'attendance':
        return (
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row gap-8">
            <AttendancePanel
              calendarEmployeeId={calendarEmployeeId}
              setCalendarEmployeeId={setCalendarEmployeeId}
            />
          </div>
        );
      case 'employees':
      default:
        return (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <EmployeeTable employees={employees} reload={loadEmployees} />
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-8">HRMS</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveView('employees')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeView === 'employees' ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            View Employees
          </button>
          <button
            onClick={() => setActiveView('add')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeView === 'add' ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            Add Employee
          </button>
          <button
            onClick={() => setActiveView('attendance')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeView === 'attendance' ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            Mark Attendance
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-linear-to-br from-gray-50 to-gray-200">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {activeView === 'employees' && 'Employee Directory'}
            {activeView === 'add' && 'Add New Employee'}
            {activeView === 'attendance' && 'Employee Attendance'}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {activeView === 'employees' && 'Browse and manage your team members.'}
            {activeView === 'add' && 'Fill in the details to add a new employee.'}
            {activeView === 'attendance' && 'Mark daily presence and absence for your team members.'}
          </p>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}
