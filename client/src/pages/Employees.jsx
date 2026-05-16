import EmployeesTable from "@/components/employees-table";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployeesData = async () => {
      try {
        let response = await axios.get("/api/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEmployeesData();
  }, []);
  return (
    <>
      <title>Employees</title>
      <EmployeesTable employees={employees} />
    </>
  );
}
