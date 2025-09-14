import React from 'react';
import {useState} from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

 
function Signup() {

    const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
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
      const response = await axios.post("http://localhost:8080/signup", formData, {
        withCredentials: true, // if you're setting cookies
      });
      console.log(response.data);
      alert("Signup Successful!");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
    setFormData({
        username: '',
        password: '',
        email: '',

    });
  };
    return ( 
         <form onSubmit={handleSubmit}>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <h2>Signup page</h2>
                    
                </div>
                <div className="col-3">
                    
                </div>
            </div>
            <br></br>
            
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <label htmlFor="UserName"></label>
                    <TextField fullWidth label="Enter UserName" id="UserName" required  name="username"
              value={formData.username}
              onChange={handleChange}/>

                </div>
                <div className="col-3">

                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <label htmlFor="Password"></label>
                    <TextField fullWidth label="Enter Password" id="Password" required type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}/>

                </div>
                <div className="col-3">

                </div>

            </div>
            <br></br>
            <div className="row mb-5">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <label htmlFor="Email Id"></label>
                    <TextField fullWidth label="Enter Email Id" id="Email Id" required name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}/>

                </div>
                <div className="col-3">

                </div>

            </div>
            <div className="row mb-5">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col mx-5"><Button type="submit" variant="contained">Submit</Button></div>

                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
               
            </div>
            
        
        </div>
        </form>
     );
}

export default Signup;