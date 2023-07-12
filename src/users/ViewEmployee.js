import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [deptEmp, setDeptEmp] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadDept();
  }, []);

  const loadDept = async () => {
    const result = await axios.get(
      `http://localhost:82/api/v1/employees/dept/${id}`
    );
    setDeptEmp(result.data);
  };
  return (
    <div className="container">
      <div className="ems">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Id</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {deptEmp.map((deptEmp, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{deptEmp.firstName}</td>
                <td>{deptEmp.lastName}</td>
                <td>{deptEmp.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
