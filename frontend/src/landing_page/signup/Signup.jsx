import axios from 'axios';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formdata,setFormdata]=useState({
    username:"",email:"",password:""
  })
  const handlesubmit=async(e)=>{
      e.preventDefault();
      try{
        const res = await axios.post(import.meta.env.VITE_SIGNUP_URL, formdata);

        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        window.location.href = res.data.redirectUrl;
      }
      catch(err){
            if(err)
            alert(err.response.data.message);
          else 
          alert("something went wrong")
      }
  }
  const handlechange=(e)=>{
        setFormdata((prev)=>({...prev,[e.target.id]:e.target.value}))
  }
  return (
   <div style={{paddingTop:"57px"}}>
     <div style={{ paddingTop: "57px", maxWidth: "400px", margin: "0 auto" }} className="mb-5">
      <form onSubmit={handlesubmit}>
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
            onChange={handlechange}
            value={formdata.username}
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
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#555",
            }}
          >
            Email
          </label>
          <input
            onChange={handlechange}
            value={formdata.email}
            type="email"
            id="email"
            placeholder="your@email.com"
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

        <div style={{ marginBottom: "12px" }}>
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
           value={formdata.password}
            onChange={handlechange}
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
          <p className='mt-2 mb-0'>already have account ? <Link to="/login">login</Link></p>
        </div>

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
          Sign Up
        </button>
      </form>
    </div>
   </div>
  );
}

export default Signup;