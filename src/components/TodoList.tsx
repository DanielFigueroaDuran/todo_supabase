import { useEffect, useState } from "react";
import Todo from "./Todo.type";
import { getTodos } from "./services/todo.service";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const allTodos = await getTodos();
    setTodos(allTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
