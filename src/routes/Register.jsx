import { useState } from "react";
import { userData } from "../data/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    const errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = "Email address is invalid";
    }
    if (!input.password) {
      errors.password = "Password is required";
    } else if (input.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInput();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    userData.push({
      id: userData.length + 1,
      name: input.name,
      email: input.email,
      password: input.password,
    });
    setInput({
      name: "",
      email: "",
      password: "",
    });
    setErrors({});
    console.log("userData", userData);
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-4xl mb-20">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <button type="submit" className="bg-blue-500 text-white h-10 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
