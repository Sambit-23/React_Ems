import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Department() {
  const [dept, setDept] = useState([]);

  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    const result = await axios.get("http://localhost:82/api/v1/departments");
    setDept(result.data);
  };

  const deleteUsers = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:82/api/v1/department/${id}`);
        loadDepartment();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="container">
      <div className="ems">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Department Name</th>
              <th scope="col">Department Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {dept.map((dept, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{dept.departmentName}</td>
                <td>{dept.departmentCode}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewEmpDept/${dept.id}`}
                  >
                    view
                  </Link>

                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUsers(dept.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
