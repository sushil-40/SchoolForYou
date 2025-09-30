import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert("Login Success");
        console.log("Login Successful", res);
      })
      .catch((err) => {
        alert("Login failed");
        console.log("Login failed", err);
      });
  };
  return (
    <div className="mx-auto flex-column justify-center items-center border rounded max-w-[300px] mt-5 bg-blue-300">
      <p className="text-center">Login Page</p>
      <div className="flex-col justify-center items-center gap-2 p-5">
        <div className="mb-5">
          <p className="text-center">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border rounded-md shadow-md"
          />
        </div>
        <div className="">
          <p className="text-center">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border rounded-md shadow-md"
          />
        </div>
        <div className="grid mt-2">
          <button onClick={handleSubmit} className="bg-amber-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
