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
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Employees
      </h1>

      <AddEmployeeForm reload={loadEmployees} />

      <EmployeeTable
        employees={employees}
        reload={loadEmployees}
      />

    </div>
  );
}