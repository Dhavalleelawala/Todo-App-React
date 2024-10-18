import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../features/todo/todoSlice";

function ViewTodos() {
  const [editIndex, setEditIndex] = useState(-1);
  const [input, setInput] = useState("");
  let todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo, index) => {
    setEditIndex(index);
    setInput(todo);   
  };
  const handleUpdate = (id) => {
    dispatch(editTodo({ id: id, text: input }));
    setEditIndex(-1);
  };

  return (
    <div className="d-flex justify-content-center m-3">
      <table
        style={{ minWidth: "300px", textAlign: "center" }}
        className="table table-striped table-bordered w-50 caption-top text-center"
      >
        <caption className="text-center fw-bolder fs-4 mb-3">
          View Todos
        </caption>
        <thead className="table-light">
          <tr className="fs-5">
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td className="fs-5 w-75 text-start">
                  {editIndex !== -1 && editIndex === index ? (
                    <input
                      type="text"
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                      className="form-control fs-5"
                    />
                  ) : (
                    todo.text
                  )}
                </td>
                <td>
                  {editIndex === -1 ? (
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => handleEdit(todo.text, index)}
                    >
                      Edit
                    </button>
                  ) : editIndex === index ? (
                    <button
                      className="btn btn-success mx-1"
                      onClick={() => handleUpdate(todo.id)}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => handleEdit(todo.text, index)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTodos;
