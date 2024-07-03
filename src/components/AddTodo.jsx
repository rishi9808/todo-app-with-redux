import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandle = (e) => {
    e.preventDefault();
    // console.log(input)
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1 className="mb-7 p-7 font-mono font-thin ">TODO APP</h1>
      <form onSubmit={addTodoHandle} className="m-5  pb-24">
        <div className="flex items-center justify-center">
          <input
            className=" input-box px-8 py-2 text-black border rounded-md bg-white font-bold"
            type="text"
            name="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id=""
          />
          <button type="submit" className=" bg-purple-500">
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
