import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUsers from "./users/AddUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUsers from "./users/EditUsers";
import ViewUsers from "./users/ViewUsers";
import Department from "./pages/Department";
import ViewEmployee from "./users/ViewEmployee";
import School from "./pages/School";
import User from "./pages/User";
import AddDepartment from "./users/AddDepartment";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/school" element={<School />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/adduser" element={<AddUsers />} />
          <Route exact path="/edituser/:id" element={<EditUsers />} />
          <Route exact path="/viewuser/:id" element={<ViewUsers />} />
          <Route exact path="/viewdepartment" element={<Department />} />
          <Route exact path="/viewEmpDept/:id" element={<ViewEmployee />} />
          <Route exact path="/addDept" element={<AddDepartment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
