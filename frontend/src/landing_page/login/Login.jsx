import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [userData,setUserData]=useState({username:"",password:""})
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(import.meta.env.VITE_LOGIN_URL, userData);

        localStorage.setItem("token", res.data.token);
        window.location.href = res.data.redirectUrl;
      } catch (error) {
        if (error) {
          alert(error.response.data.message);
        } else {
          alert("Something went wrong.");
        }
      }
    };
    
    const handleChange=(e)=>{
            setUserData((prev)=>({...prev,[e.target.id]:e.target.value}))
    }
    return ( 
        <div style={{paddingTop:"57px"}}>
     <div style={{ paddingTop: "57px", maxWidth: "400px", margin: "0 auto" }} className="mb-5">
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#555",
            }}
          >
            username
          </label>
          <input
            onChange={handleChange}
           value={userData.username}
            type="username"
            id="username"
            placeholder="username"
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              fontSize: "14px",
              transition: "border 0.3s",
            }}
          />
        </div>

        <div style={{ marginBottom: "5px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#555",
            }}
          >
            Password
          </label>
          <input
            onChange={handleChange}
            value={userData.password}
            type="password"
            id="password"
            placeholder="Create a password"
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              fontSize: "14px",
              transition: "border 0.3s",
            }}
          />
        </div>
        <p className="mb-2">Don't have account ? <Link to="/signup">Create now</Link></p>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#387ed1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: "translateY(0)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = "#2a5ea0";
            e.currentTarget.style.transform = "translateY(1px)";
            e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = "#387ed1";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#387ed1";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}
        >
          Log in
        </button>
              </form>
            </div>
          </div>
     );
}

export default Login;
