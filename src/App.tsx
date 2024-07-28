import "./index.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <main className="flex items-center justify-center  mx-20 my-5">
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <TodoItem title="Tarea 1" description="Mañana" isCompleted={true} />
        <TodoItem title="Tarea 1" description="Mañana" isCompleted={true} />
        <TodoItem title="Tarea 1" description="Mañana" isCompleted={true} />
      </div>
    </main>
  );
}

export default App;
