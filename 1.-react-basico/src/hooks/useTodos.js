import { useState } from "react";

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    newTodo.id = Date.now();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    const filterTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(filterTodo);
  };

  return [todos, addTodo, deleteTodo];
};

export default useTodos;
