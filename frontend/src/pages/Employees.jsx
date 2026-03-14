 import {use, useEffect ,useState } from 'react';
 import {getEmployees} from '../services/api';
 import EmployeeTable from '../components/EmployeeTable';
 import AddEmployeeForm from '../components/AddEmployeeForm'


export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Dashboard */}
      <aside className="w-1/4 min-w-[220px] max-w-xs bg-gradient-to-b from-[#23395d] to-[#406080] p-8 flex flex-col gap-8 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">HRMS Dashboard</h2>
          <p className="text-blue-100 text-sm">Quick access to HR features</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="bg-white text-[#23395d] font-semibold py-2 rounded shadow hover:bg-blue-100 transition"
            onClick={() => { setShowForm(true); setShowAttendance(false); }}
          >
            Add Employee
          </button>
          <button
            className="bg-white text-[#23395d] font-semibold py-2 rounded shadow hover:bg-blue-100 transition"
            onClick={() => { setShowAttendance(true); setShowForm(false); }}
          >
            Attendance
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-3/4 px-8 py-8">
        <header className="bg-gradient-to-r from-[#23395d] to-[#406080] p-8 pb-6 rounded-xl mb-8 shadow-md text-left">
          <h1 className="text-white text-4xl font-bold mb-2 tracking-wide drop-shadow">Employees</h1>
          <p className="text-blue-100 text-lg font-normal tracking-wide">Below is the list of all employees. You can add, view, or manage employee information here.</p>
        </header>
        {showForm && (
          <AddEmployeeForm reload={loadEmployees} />
        )}
        {showAttendance && (
          <div className="bg-white shadow p-6 rounded mb-6 max-w-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#23395d]">Attendance</h2>
            {/* Inline AttendanceForm here if needed, or import and use */}
            {/* <AttendanceForm /> */}
            <p className="text-gray-500">Attendance form goes here.</p>
          </div>
        )}
        {!showForm && !showAttendance && (
          <EmployeeTable employees={employees} reload={loadEmployees} />
        )}
      </main>
    </div>
  );
}
