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
    <div className=" container">
      <h1 className="mb-7 p-7 font-mono font-thin text-4xl md:text-5xl lg:text-6xl">TODO APP</h1>
      <form onSubmit={addTodoHandle} className="flex justify-center items-center">
        <div className="grid grid-cols-12   gap-1 md:w-[35rem]">
          <input
            className="text-black border rounded-md bg-white font-bold col-span-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 py-1"
            type="text"
            name="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id=""
          />
          <button type="submit" className=" bg-purple-500 col-span-4 text-sm sm:text-xl md:text-2xl">
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
