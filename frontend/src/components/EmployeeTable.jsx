import { deleteEmployee } from "../services/api";

export default function EmployeeTable({employees , reload}){
    const handleDelete = async (id) =>{
        await deleteEmployee(id);
        reload();
    }
    return (
    <div style={{ background: 'linear-gradient(135deg, #23272f 0%, #2d3748 100%)', color: '#f3f4f6', borderRadius: 12, boxShadow: '0 2px 12px 0 rgba(36, 37, 38, 0.18)', padding: '1.5rem', marginBottom: '1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'transparent' }}>
        <thead>
          <tr style={{ background: '#2d3748' }}>
            <th style={{ color: '#60a5fa', padding: '0.7rem', fontWeight: 700 }}>ID</th>
            <th style={{ color: '#60a5fa', padding: '0.7rem', fontWeight: 700 }}>Name</th>
            <th style={{ color: '#60a5fa', padding: '0.7rem', fontWeight: 700 }}>Email</th>
            <th style={{ color: '#60a5fa', padding: '0.7rem', fontWeight: 700 }}>Department</th>
            <th style={{ color: '#ef4444', padding: '0.7rem', fontWeight: 700 }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id} style={{ borderBottom: '1px solid #374151' }}>
              <td style={{ padding: '0.6rem' }}>{emp.employeeId}</td>
              <td style={{ padding: '0.6rem' }}>{emp.name}</td>
              <td style={{ padding: '0.6rem' }}>{emp.email}</td>
              <td style={{ padding: '0.6rem' }}>{emp.department}</td>
              <td style={{ padding: '0.6rem' }}>
                <button
                  onClick={() => handleDelete(emp._id)}
                  style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer', fontWeight: 600 }}
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