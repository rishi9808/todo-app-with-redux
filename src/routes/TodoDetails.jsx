import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetails = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );
  return (
    <>
      <h3 className="text-5xl pb-40">Todo Details</h3>
      <div className="flex items-center justify-center">
        <div className="bg-white px-16 py-4">
          <p className="text-black  text-2xl font-bold">{todo.data}</p>
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
