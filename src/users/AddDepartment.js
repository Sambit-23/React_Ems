import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddDepartment() {
  let navigate = useNavigate();
  const [user, setUsers] = useState({
    departmentName: "",
    departmentCode: "",
  });

  const { departmentName, departmentCode } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:82/api/v1/department`, user);
    navigate("/viewdepartment");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="DepartmentName" className="form-label">
                Department Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Department Name"
                name="departmentName"
                value={departmentName}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="DepartmentCode" className="form-label">
                Department Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Department Code"
                name="departmentCode"
                value={departmentCode}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
