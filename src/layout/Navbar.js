import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Employee Management System
          </Link>
        </div>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/user">
            User
          </Link>
          <Link className="btn btn-outline-light" to="/viewdepartment">
            Departmemt
          </Link>
          <Link className="btn btn-outline-light" to="/school">
            School
          </Link>
        </div>
        <div className="container" style={{ justifyContent: "right" }}>
          <Link
            className="btn btn-outline-light"
            style={{ marginRight: "20px" }}
            to="/adduser"
          >
            Add User
          </Link>

          <Link className="btn btn-outline-light" to="/addDept">
            Add Department
          </Link>
        </div>
      </nav>
    </div>
  );
}
