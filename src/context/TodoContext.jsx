import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  
  const [todos, setTodos] = useState([{ id: 1, text: "I am From Context" }]);

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  //   Delete Todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   Save Todo

  const saveTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
    };

    setTodos([newTodo, ...todos]);
  };

  //   Edit Todo
  const editTodo = (todo) => {
    setEdit({ todo: todo, isEdit: true });
  };

  const updateTodo = (id, text) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <TodoContext.Provider
      value={{ todos, edit, deleteTodo, saveTodo, editTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
