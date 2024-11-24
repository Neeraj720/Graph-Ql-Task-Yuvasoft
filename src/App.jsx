import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./component/Login";
import "./App.css";
import Homepage from "./component/Homepage";
import View from "./component/View";
import Location from "./component/LOcation";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Login />}
        />

        {/* Private Routes */}
        {token ? (
          <>
            <Route path="/home" element={<Homepage />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
