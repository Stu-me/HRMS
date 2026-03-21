import { deleteEmployee } from "../services/api";
import { COLORS, STYLES } from "../constants/colors";
import { toast } from "react-hot-toast";

export default function EmployeeTable({employees , reload}){
    const handleDelete = async (id) =>{
        try {
            await deleteEmployee(id);
            toast.success("Employee deleted successfully!", {
                style: { background: '#dcfce7', color: '#166534', fontWeight: 'bold' }
            });
            reload();
        } catch (error) {
            toast.error("Error deleting employee", {
                style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' }
            });
        }
    }
    return (
    <div style={{ background: COLORS.bg.glass, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: COLORS.text.primary, border: `2.5px solid ${COLORS.border.lighter}`, borderRadius: 12, boxShadow: STYLES.shadowLg, padding: '0rem', marginBottom: '1.5rem', overflowX: 'auto', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'transparent' }}>
        <thead>
          <tr style={{ background: 'rgba(62, 166, 255, 0.08)', borderBottom: `2px solid ${COLORS.border.lighter}`, borderTop: `2px solid ${COLORS.border.lighter}` }}>
            <th style={{ color: COLORS.text.accent, padding: '1rem 0.875rem', fontWeight: 700, textAlign: 'left', borderRight: `1px solid ${COLORS.border.light}` }}>ID</th>
            <th style={{ color: COLORS.text.accent, padding: '1rem 0.875rem', fontWeight: 700, textAlign: 'left', borderRight: `1px solid ${COLORS.border.light}` }}>Name</th>
            <th style={{ color: COLORS.text.accent, padding: '1rem 0.875rem', fontWeight: 700, textAlign: 'left', borderRight: `1px solid ${COLORS.border.light}` }}>Email</th>
            <th style={{ color: COLORS.text.accent, padding: '1rem 0.875rem', fontWeight: 700, textAlign: 'left', borderRight: `1px solid ${COLORS.border.light}` }}>Department</th>
            <th style={{ color: COLORS.status.error, padding: '1rem 0.875rem', fontWeight: 700, textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id} style={{ borderBottom: `1.5px solid ${COLORS.border.light}`, transition: 'all 0.2s ease', backgroundColor: 'transparent' }}>
              <td style={{ padding: '0.875rem', color: COLORS.text.primary, borderRight: `1px solid ${COLORS.border.light}` }}>{emp.employeeId}</td>
              <td style={{ padding: '0.875rem', color: COLORS.text.primary, borderRight: `1px solid ${COLORS.border.light}` }}>{emp.name}</td>
              <td style={{ padding: '0.875rem', color: COLORS.text.secondary, fontSize: '0.9rem', borderRight: `1px solid ${COLORS.border.light}` }}>{emp.email}</td>
              <td style={{ padding: '0.875rem', color: COLORS.text.secondary, borderRight: `1px solid ${COLORS.border.light}` }}>{emp.department}</td>
              <td style={{ padding: '0.875rem', textAlign: 'center' }}>
                <button
                  onClick={() => handleDelete(emp._id)}
                  style={{ ...STYLES.buttonBase, background: COLORS.status.error, color: '#fff', fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
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