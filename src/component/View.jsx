import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleUserRequset } from "../ReduxSaga/authSaga/authAction";

function View() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const data = {
        userId: id,
      };
      dispatch(getSingleUserRequset(data));
    }
  }, [id, dispatch]);

  const { userData, loading } = useSelector((state) => state.auth);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div style={{ maxWidth: "500px", width: "100%" }}>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Link className="btn btn-primary mb-3" to="/home">
              <i className="bi bi-arrow-left"></i> Back
            </Link>
            <div className="card shadow rounded-4">
              <div
                className="card-header bg-primary text-white rounded-top-4"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                User Details
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <strong>Name:</strong>{" "}
                  <span className="text-secondary">{userData?.name}</span>
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <span className="text-secondary">{userData?.email}</span>
                </div>
              </div>
              <div
                className="card-footer text-center bg-light rounded-bottom-4"
                style={{ fontSize: "0.9rem" }}
              >
                User ID: <strong>{id}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default View;
