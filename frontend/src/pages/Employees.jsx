 import {use, useEffect ,useState } from 'react';
 import {getEmployees} from '../services/api';
 import EmployeeTable from '../components/EmployeeTable';
 import AddEmployeeForm from '../components/AddEmployeeForm'


 export default function Employees(){
  const [employees,setEmployees] = useState([]) ; // state variable declated as empty variabble

  const loadEmployees = async ()=>{// laod employee call the backend and update the employees
    const res = await getEmployees();// calls backend 
    setEmployees(res.data);
  };

  useEffect(()=>{ // render only once after the page starts 
    loadEmployees()
  },[]);

   return (
  <div>
    <h1>Employees</h1>
    <AddEmployeeForm reload={loadEmployees} />
    <EmployeeTable
      employees={employees}
      reload={loadEmployees}
    />
  </div>
 )
 }
