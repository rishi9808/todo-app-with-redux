import React from "react";
import { userData } from "../data/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(login(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/todo");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="">
      <h1
        className="
            text-4xl mb-20
        "
      >
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center "
      >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-5  w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1"
          />
         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-5 w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1"
          />
          <button type="submit"
           className="bg-blue-500 text-white  h-10 rounded-md"
          >Login</button>

          <p className="mt-2">New user? <a href="/register">Register</a></p>
    
      </form>
    </div>
  );
};

export default Login;
