// import { useState } from "react";
// import { userData } from "../data/user";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateInput = () => {
//     const errors = {};
//     if (!input.name) {
//       errors.name = "Name is required";
//     }
//     if (!input.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(input.email)) {
//       errors.email = "Email address is invalid";
//     }
//     if (!input.password) {
//       errors.password = "Password is required";
//     } else if (input.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateInput();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     userData.push({
//       id: userData.length + 1,
//       name: input.name,
//       email: input.email,
//       password: input.password,
//     });
//     setInput({
//       name: "",
//       email: "",
//       password: "",
//     });
//     setErrors({});
//     console.log("userData", userData);
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1 className="text-4xl mb-20">Register</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
//         <input
//           type="text"
//           name="name"
//           value={input.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
//         />
//         {errors.name && <p className="text-red-500">{errors.name}</p>}

//         <input
//           type="email"
//           name="email"
//           value={input.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
//         />
//         {errors.email && <p className="text-red-500">{errors.email}</p>}

//         <input
//           type="password"
//           name="password"
//           value={input.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
//         />
//         {errors.password && <p className="text-red-500">{errors.password}</p>}

//         <button type="submit" className="bg-blue-500 text-white h-10 rounded-md">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import { userData } from "../data/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userData.push({
      id: userData.length + 1,
      ...data,
    });
    console.log(userData);
    navigate("/")
  };
  return (
    <div className="w-full h-[60vh] my-10">
      <div className="border md:w-[60%] lg:w-1/2 mx-auto p-4 border-purple-300">
        <h1 className="text-4xl mb-20">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="" className="w-[16rem] md:w-[20rem]  text-start pb-1">
            Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              maxLength: 20,
              pattern: {
                value: /^[A-Za-z ]+$/i ,
                message: "error"
              }
            })}
            placeholder="Enter your name"
            className="sm:w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
          />
          <p className="text-red-400">{errors.name?.message}</p>

          <label htmlFor="" className="w-[16rem] md:w-[20rem]  text-start pb-1">
            Age
          </label>
          <input
            type="number"
            {...register("age", {
              min: { value: 12, message: "minimum age is 12" },
              max: { value: 99, message: "Max age is 99" },
            })}
            className="sm:w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
            placeholder="Enter Age"
          />
          <p className="text-red-400">{errors.age?.message}</p>

          <label htmlFor="" className="w-[16rem] md:w-[20rem] text-start pb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "email is required",
            })}
            className="sm:w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
            placeholder="Enter email"
          />
          <p className="text-red-400">{errors.email?.message}</p>
          <label htmlFor="" className="w-[16rem] md:w-[20rem]  text-start pb-1">
            Password
          </label>
          <input
            type="password"
            {...register("password", 
              { required: "Password is required" ,
                minLength: {
                  value: 8,
                  message: 'Password must be atleast 8 characters long'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must include upper, lower, number, and special character',
                }
              })}
            className="sm:w-80 h-10 border-2 border-gray-300 rounded-md px-2 py-1 mb-5"
            placeholder="Enter password"
          />
          <p className="text-red-400 pb-2">{errors.password?.message}</p>
          <input type="submit" className="bg-purple-700 p-2 rounded-xl px-4"  />
        </form>
      </div>
    </div>
  );
};

export default Register;
