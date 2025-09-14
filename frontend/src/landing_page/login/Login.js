import React, { useState } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formData, {
        withCredentials: true, // required for cookies/session
      });
      console.log(response.data);
      alert("Login Successful!");

      window.location.href = 'http://localhost:3001/';

      // Redirect or store user info if needed
      // Example: window.location.href = "/dashboard";

    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your credentials.");
    }
    setFormData({
    username: '',
    password: '',
  });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <h2>Login page</h2>
                    
                </div>
                <div className="col-3">
                    
                </div>
            </div>
            <br></br>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <TextField
              fullWidth
              label="Enter Username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="col-3"></div>
        </div>

        <br />

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <TextField
              fullWidth
              label="Enter Password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-3"></div>
        </div>

        <br />

        <div className="row mb-5">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col mx-5">
            <Button type="submit" className="mx-5" variant="contained">
              Login
            </Button>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </form>
  );
}

export default Login;
