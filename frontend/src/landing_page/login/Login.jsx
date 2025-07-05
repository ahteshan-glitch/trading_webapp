import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const styles = {
  container: { paddingTop: "57px", maxWidth: "400px", margin: "0 auto" },
  fieldWrapper: { marginBottom: "20px" },
  label: { display: "block", fontWeight: 600, marginBottom: "8px", color: "#555" },
  input: {
    width: "100%",
    padding: "12px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    transition: "border 0.3s",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_LOGIN_URL;
    if (!url) {
      return alert("Login URL not configured. Check your .env file.");
    }

    try {
      const res = await axios.post(
        url,
        userData,
        { withCredentials: true }
      );
      // store token if you also return it in JSON
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      window.location.href = res.data.redirectUrl;
    } catch (err) {
      // More robust guard
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong. Please try again.";
      alert(msg);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div style={styles.fieldWrapper}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="username"
            required
            value={userData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.fieldWrapper}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            required
            value={userData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <p className="mb-2">
          Don't have an account? <Link to="/signup">Create now</Link>
        </p>

        <button
          type="submit"
          style={styles.button}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(1px)";
            e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
