import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeForm from "../components/AddEmployeeForm";

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
    <div>
      <h1>Employees</h1>

      <AddEmployeeForm reload={loadEmployees} />

      <EmployeeTable employees={employees} reload={loadEmployees} />
    </div>
  );
}
