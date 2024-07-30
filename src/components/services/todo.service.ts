import Todo from "../Todo.type";
import supabase from "./supabase.service";

const getTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("Todo").select();
  if (error) throw error;
  return data;
};

const editTodo = async (id: number, editingTodoValues: Todo) => {
  if (id == null) return;
  const { title, description } = editingTodoValues;
  const { error } = await supabase
    .from("Todo")
    .update({ title, description })
    .eq("id", id);
  if (error) throw error;
};

const deleteTodo = async (id: number) => {
  const { error } = await supabase.from("Todo").delete().eq("id", id);
  if (error) throw error;
};

const createTodo = async (title: string, description: string) => {
  const { error } = await supabase.from("Todo").insert({ title, description });
  if (error) throw error;
};

const checkTodo = async (id: number, newValue: boolean) => {
  const { error } = await supabase
    .from("Todo")
    .update({ isCompleted: newValue })
    .eq("id", id);
  if (error) throw error;
};

export { getTodos, editTodo, deleteTodo, createTodo, checkTodo };
