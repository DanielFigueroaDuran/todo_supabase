import { createClient } from "@supabase/supabase-js";
//const supabaseUrl = "https://zdpygonsjactfedtayff.supabase.co";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log(supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
