import React, { useReducer, useState } from "react";

const types = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const initialTodos = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
];

// Los reducers deben usar funciones puras
const reducer = (state, action) => {
  switch (action.type) {
    case types.DELETE: {
      return state.filter((item) => item.id !== action.payload);
    }
    case types.ADD: {
      // no usar state.push ya que muta al estado
      return [...state, action.payload];
    }
    case types.UPDATE: {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    }
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: types.ADD,
      payload: {
        id: Date.now(),
        title: text,
      },
    });
    setText("");
  };

  return (
    <div>
      <h3>Todo App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <span> - </span>{" "}
            <button
              onClick={() => dispatch({ type: types.DELETE, payload: todo.id })}
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.UPDATE,
                  payload: { ...todo, title: text },
                })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoApp;
