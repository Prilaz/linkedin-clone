import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
    // Add authentication logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm rounded-5" style={{ width: "400px" }}>
        <div className="text-center mb-3">
          <i class="bi bi-linkedin fs-5 text-primary"></i>
          <h5 className="fw-bold">Log in to LinkedIn</h5>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email or Phone</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <Link to="/forgot-password" className="text-primary small">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Log in
          </button>

          <div className="text-center mt-3">
            <p className="small">
              New to LinkedIn?{" "}
              <Link to="/signin" className="text-primary fw-bold">
                Join now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
