import { deleteEmployee } from "../services/api";

export default function EmployeeTable({
  employees,
  reload
}) {

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    reload();
  };

  return (
    <div className="bg-white shadow rounded">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Delete</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr
              key={emp._id}
              className="border-t"
            >

              <td className="p-3">
                {emp.employeeId}
              </td>

              <td className="p-3">
                {emp.name}
              </td>

              <td className="p-3">
                {emp.email}
              </td>

              <td className="p-3">
                {emp.department}
              </td>

              <td className="p-3">
                <button
                  onClick={() =>
                    handleDelete(emp._id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}