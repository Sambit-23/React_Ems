import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUsers] = useState({
    id: "",
  });

  const { id } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const result = await axios.get(`http://localhost:82/api/v1/employee/${id}`);
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">Search User by Id</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <Link
              type="submit"
              className="btn btn-outline-primary"
              to={`/viewuser/${user.id}`}
            >
              Submit
            </Link>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
