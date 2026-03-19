import { useState } from "react";
import { deleteEmployee, getEmployees } from "../services/api";
import { COLORS, STYLES } from "../constants/colors";
import { toast } from "react-hot-toast";

export default function DeleteEmployeeForm({ reload }) {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!employeeId.trim()) {
      toast.error("Please enter an Employee ID", { 
        style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } 
      });
      return;
    }

    setLoading(true);
    try {
      const res = await getEmployees();
      const employee = res.data.find(emp => emp.employeeId === employeeId);
      
      if (employee) {
        setEmployeeName(employee.name);
      } else {
        setEmployeeName("");
        toast.error("Employee not found", { 
          style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } 
        });
      }
    } catch (error) {
      toast.error("Error searching for employee", { 
        style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!employeeName) {
      toast.error("Please search for an employee first", { 
        style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } 
      });
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${employeeName} (ID: ${employeeId})? This action cannot be undone.`
    );

    if (confirmDelete) {
      setLoading(true);
      try {
        const res = await getEmployees();
        const employee = res.data.find(emp => emp.employeeId === employeeId);
        
        if (employee) {
          await deleteEmployee(employee._id);
          toast.success(`Employee "${employeeName}" deleted successfully`, { 
            style: { background: '#dcfce7', color: '#166534', fontWeight: 'bold' } 
          });
          setEmployeeId("");
          setEmployeeName("");
          reload();
        }
      } catch (error) {
        toast.error("Error deleting employee", { 
          style: { background: '#fee2e2', color: '#991b1b', fontWeight: 'bold' } 
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      style={{
        background: COLORS.bg.glass,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: COLORS.text.primary,
        border: `1px solid ${COLORS.border.light}`,
        boxShadow: STYLES.shadowMd,
        borderRadius: 12,
        padding: '1.5rem',
        marginBottom: '1.5rem',
        maxWidth: '32rem',
      }}
    >
      <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 18, color: COLORS.status.error }}>
        Delete Employee
      </h2>
      
      <input
        style={{ 
          ...STYLES.inputGlass,
          marginBottom: 12, 
          width: '100%' 
        }}
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleSearch}
        style={{ 
          ...STYLES.buttonBase,
          background: COLORS.text.accent, 
          color: COLORS.bg.darker, 
          marginBottom: 16,
          width: '100%',
          opacity: loading ? 0.6 : 1,
        }}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      {employeeName && (
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${COLORS.border.glow}`,
            borderRadius: 8,
            padding: '1rem',
            marginBottom: 16,
          }}
        >
          <p style={{ color: COLORS.text.secondary, marginBottom: 8 }}>
            <strong>Found Employee:</strong>
          </p>
          <p style={{ color: COLORS.text.accent, fontSize: '1.1rem' }}>
            {employeeName} (ID: {employeeId})
          </p>
        </div>
      )}

      {employeeName && (
        <button
          onClick={handleDelete}
          style={{ 
            ...STYLES.buttonBase,
            background: COLORS.status.error, 
            color: '#fff', 
            width: '100%',
            opacity: loading ? 0.6 : 1,
          }}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Confirm Delete'}
        </button>
      )}
    </div>
  );
}
