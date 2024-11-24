import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequset } from "../ReduxSaga/authSaga/authAction";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userList } = useSelector((state) => state.auth);

  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const size = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [pageNo, setPageNo] = useState("1");
  const [pageSize, setPageSize] = useState("10");

  useEffect(() => {
    const data = {
      page: pageNo,
      size: pageSize,
    };
    dispatch(getUserRequset(data));
  }, [dispatch, pageNo, pageSize]);

  // Navigate to view a single user
  const viewUser = (id) => {
    navigate(`/view/${id}`);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/location" className="btn btn-success px-4">
          Location
        </Link>
        <h4 className="text-primary">User List</h4>
        <button onClick={handleLogout} className="btn btn-danger px-4">
          Logout
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Email</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => viewUser(user.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Page Size */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex flex-column">
          <label htmlFor="page-select" className="form-label">
            Select Page
          </label>
          <select
            id="page-select"
            onChange={(e) => setPageNo(e.target.value)}
            className="form-select"
          >
            <option value="">Select Page</option>
            {page.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="size-select" className="form-label">
            Select Size
          </label>
          <select
            id="size-select"
            className="form-select"
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value="">Select Size</option>
            {size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

