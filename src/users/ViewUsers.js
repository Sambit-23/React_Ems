import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUsers() {
  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:82/api/v1/employee/${id}`
      );
      setUsers(result.data);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {user.firstName}
                </li>

                <li className="list-group-item">
                  <b>Last Name:</b>
                  {user.lastName}
                </li>

                <li className="list-group-item">
                  <b>Email Id:</b>
                  {user.emailId}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
