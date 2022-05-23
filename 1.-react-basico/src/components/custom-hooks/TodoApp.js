import React from "react";
import useTodos from "../../hooks/useTodos";

const initialTodos = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn Node.js",
  },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);

  return (
    <div>
      <h3>Todo App</h3>
      <button onClick={() => addTodo({ title: "new task" })}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <span></span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
