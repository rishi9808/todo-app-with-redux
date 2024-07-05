import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/loginSlice";

const Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="">
      <p className="absolute top-5 sm:top-6 lg:top-7 right-24 sm:right-32 lg:right-44 text-sm md:text-xl lg:text-3xl mr-2">{user.name}</p>
      <button
        className="absolute top-3  right-3 bg-red-500 w-[5rem]  rounded-xl text-white font-bold text-sm sm:text-lg sm:w-[7rem] lg:text-2xl lg:w-[10rem]"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="mt-[2.5rem]">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-center items-center p-3 "
            >
              <div className="bg-white p-3 rounded-lg bg-purple-100 md:w-1/2 lg:w-100">
                <h2
                  className=" text-black font-normal rounded-md  text-3xl"
                  onClick={() => navigate(`/todo/${todo.id}`)}
                >
                  {todo.data}
                </h2>
                <button
                  className=" bg-red-500 mx-2"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  remove
                </button>

                <button
                  className=" bg-blue-500"
                  onClick={() =>
                    dispatch(
                      updateTodo({
                        id: todo.id,
                        newData: prompt("Enter new data"),
                      })
                    )
                  }
                >
                  update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
