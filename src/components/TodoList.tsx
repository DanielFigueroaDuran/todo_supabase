import { useEffect, useState } from "react";
import Todo from "./Todo.type";
import { createTodo, deleteTodo, getTodos } from "./services/todo.service";
import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const fetchTodos = async () => {
    const allTodos = await getTodos();
    setTodos(allTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoDelete = async (id: number) => {
    deleteTodo(id);
    fetchTodos();
  };

  const handleTodoCreate = async (title: string, description: string) => {
    createTodo(title, description);
    fetchTodos();
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = () => {};

  const handleEdittingChange = () => {};

  return (
    <>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            isCompleted={todo.isCompleted ?? false}
            title={todo.title}
            description={todo.description}
            key={todo.id}
            id={todo.id}
            // onChange={handleChange}
            onDelete={() => handleTodoDelete(todo.id)}
            // onEdit={handleEdittingChange}
          />
        ))}
      </div>
      {/* {loading && <span>"Loading..."</span>} */}

      <button className="p-2 bg-blue-600 rounded-md border border-blue-300 hover:bg-blue-400 active:scale-95 text-white">
        Nueva Tarea
      </button>

      {isModalOpen && (
        <TodoModal onClose={handleModalClose} onCreate={handleTodoCreate} />
      )}
    </>
  );
};

export default TodoList;
