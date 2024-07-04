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
  console.log(user)



  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="">
      <p className="absolute top-11 right-[170px] text-2xl ">{user.name}</p>
      <button className="absolute top-10 right-10 bg-red-500" onClick={handleLogout}>Logout</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-center items-center p-3">
            <div className="bg-white px-32  py-2 rounded-lg"
            >
              <h2 className=" text-black font-normal rounded-md  text-3xl" onClick={() => navigate(`/todo/${todo.id}`)}>
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
  );
};

export default Todo;
