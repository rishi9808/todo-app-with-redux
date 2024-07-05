import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="mt-[100px]">
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
