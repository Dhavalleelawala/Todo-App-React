import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearAllTodo } from "../features/todo/todoSlice";
import ViewTodos from './ViewTodos'

function AddTodo() {
  const [text, setText] = useState("");
  const input = useRef('');
  const dispatch = useDispatch();
  let handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
    input.current.focus();
  };
  return (
    <div className="text-center w-25 m-auto">
      <h2>Todo App</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="text"
          value={text}
          ref={input}
          onChange={(e) => setText(e.target.value)}
          className="form-control mb-1"
        />
        <button className="btn btn-primary mx-1" type="submit" >
          Add
        </button>
        <button className="btn btn-danger mx-1" type="button" onClick={() => dispatch(clearAllTodo([]))}>
          Clear All
        </button>
      </form>
      <ViewTodos/>
    </div>
  );
}

export default AddTodo;
