import "./index.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <main className="flex flex-col gap-4 mx-20 my-5">
      <TodoItem title="Tarea 1" description="Urgente" isCompleted={true} />
      <TodoItem title="Tarea 1" description="Urgente" isCompleted={true} />
      <TodoItem title="Tarea 1" description="Urgente" isCompleted={true} />
    </main>
  );
}

export default App;
