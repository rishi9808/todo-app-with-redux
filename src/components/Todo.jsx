import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className=" ">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-center items-center p-3">
            <div className="bg-white px-32  py-2 rounded-lg">
              <h2 className=" text-black font-normal rounded-md  text-3xl">
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
