import { deleteEmployee } from "../services/api";

export default function EmployeeTable({employees , reload}){
    const handleDelete = async (id) =>{
        await deleteEmployee(id);
        reload();
    }
    return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp._id}>
            <td>{emp.employeeId}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>
              <button
                onClick={() => handleDelete(emp._id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}