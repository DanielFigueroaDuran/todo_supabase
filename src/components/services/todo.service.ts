import Todo from "../Todo.type";
import supabase from "./supabase.service";

const getTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("Todo").select();
  if (error) throw error;
  return data;
};

export { getTodos };
