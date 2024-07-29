import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <main className="flex items-center justify-center  mx-20 my-5">
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <TodoList />
      </div>
    </main>
  );
}

export default App;
