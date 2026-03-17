import { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeForm from '../components/AddEmployeeForm';

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
    <>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Employees</h1>
      <AddEmployeeForm reload={loadEmployees} />
      <EmployeeTable employees={employees} reload={loadEmployees} />
    </>
  );
}
