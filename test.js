import { createClient } from "npm:@supabase/supabase-js@2";
const supabase = createClient(
    "https://xixyqsojpqoyvabcvuop.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeHlxc29qcHFveXZhYmN2dW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNjY3NzYsImV4cCI6MjA3Mzc0Mjc3Nn0.DDRfvwiaLGXTKtrus3vz0OvdEnvWD360GLx699uIQi4",
);
async function fetchDataFromSupabase() {
    try {
        const { data, error } = await supabase
            .from("src") // Replace with your table name
            .select("*"); // Select all columns

        if (error) {
            console.error("Error fetching data:", error.message);
            return null;
        }

        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("An unexpected error occurred:", error);
        return null;
    }
}

fetchDataFromSupabase();
