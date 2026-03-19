import { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeForm from '../components/AddEmployeeForm';
import DeleteEmployeeForm from '../components/DeleteEmployeeForm';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Employees</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem', maxWidth: '900px', width: '100%' }}>
        <AddEmployeeForm reload={loadEmployees} />
        <DeleteEmployeeForm reload={loadEmployees} />
      </div>
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        {/* <EmployeeTable employees={employees} reload={loadEmployees} /> */}
      </div>
    </div>
  );
}
