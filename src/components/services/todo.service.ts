import Todo from "../Todo.type";
import supabase from "./supabase.service";

const getTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("Todo").select();
  if (error) throw error;
  return data;
};

const deleteTodo = async (id: number) => {
  const { error } = await supabase.from("Todo").delete().eq("id", id);
  if (error) throw error;
};

const createTodo = async (title: string, description: string) => {
  const { error } = await supabase.from("Todo").insert({ title, description });
  if (error) throw error;
};

export { getTodos, deleteTodo, createTodo };
