import { deleteEmployee } from "../services/api";

export default function EmployeeTable({ employees, reload }) {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    reload();
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((emp) => (
            <tr key={emp._id} className="hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.employeeId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.department}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDelete(emp._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  title="Delete Employee"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}