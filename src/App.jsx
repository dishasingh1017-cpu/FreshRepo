

import React, { useState } from "react";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    if (username.trim() === "") {
      alert("Please enter your username");
      return;
    }

    setUser({
      username: username.trim(),
      role: role
    });
  };

  const handleLogout = () => {
    setUser(null);
    setUsername("");
  };

  // Dashboard after login
  if (user) {
    return (
      <div className="app">
        <div className="dashboard-card">

          <div className="top-section">
            <div className="logo">🔐</div>

            <div>
              <h1>Welcome, {user.username}!</h1>
              <p className="subtitle">
                You are logged in successfully.
              </p>
            </div>
          </div>

          <div className="role-box">
            <span className="role-label">Your Role</span>

            <span
              className={`role-badge ${
                user.role === "Admin" ? "admin" : "viewer"
              }`}
            >
              {user.role}
            </span>
          </div>

          <div className="access-section">
            <h2>Access Control</h2>

            {user.role === "Admin" ? (
              <div className="admin-access">
                <div className="access-icon">🛡️</div>

                <div>
                  <h3>Admin Access</h3>
                  <p>
                    You have permission to manage posts.
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => alert("Post Deleted Successfully!")}
                >
                  🗑 Delete Post
                </button>
              </div>
            ) : (
              <div className="viewer-access">
                <div className="access-icon">👁️</div>

                <div>
                  <h3>Viewer Access</h3>
                  <p>
                    You can view posts but cannot modify them.
                  </p>
                </div>

                <span className="readonly">
                  Read-only access
                </span>
              </div>
            )}
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>
    );
  }

  // Login page
  return (
    <div className="app">
      <div className="login-card">

        <div className="login-icon">🔐</div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login and access your dashboard
        </p>

        <div className="input-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <p className="choose-text">
          Choose your role to continue
        </p>

        <div className="login-buttons">

          <button
            className="admin-btn"
            onClick={() => handleLogin("Admin")}
          >
            🛡️
            <span>
              <strong>Login as Admin</strong>
              <small>Full access</small>
            </span>
          </button>

          <button
            className="viewer-btn"
            onClick={() => handleLogin("Viewer")}
          >
            👁️
            <span>
              <strong>Login as Viewer</strong>
              <small>Read-only access</small>
            </span>
          </button>

        </div>

        <div className="info">
          🔒 Role-Based Access Control
        </div>

      </div>
    </div>
  );
}

export default App;