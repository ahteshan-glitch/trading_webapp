// frontend/src/components/Login.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUserData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        import.meta.env.VITE_LOGIN_URL,
        userData,
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      window.location.href = res.data.redirectUrl;
    } catch (err) {
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else if (err.request) {
        alert("Network error: cannot reach server.");
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={{ paddingTop: "57px" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="username" style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={userData.username}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: 8,
                fontSize: 14,
                transition: "border 0.3s"
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={userData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e0e0e0",
                borderRadius: 8,
                fontSize: 14,
                transition: "border 0.3s"
              }}
            />
          </div>
          <p>
            Don't have an account? <Link to="/signup">Create now</Link>
          </p>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "background 0.2s, transform 0.1s"
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
