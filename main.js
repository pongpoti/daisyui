import express from "npm:express";
import process from "node:process";
import path from "node:path";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const supabase = createClient(
  "https://xixyqsojpqoyvabcvuop.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeHlxc29qcHFveXZhYmN2dW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNjY3NzYsImV4cCI6MjA3Mzc0Mjc3Nn0.DDRfvwiaLGXTKtrus3vz0OvdEnvWD360GLx699uIQi4",
);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use(express.static(path.join(__dirname, "main")));
app.use("/uploaded", express.static("uploaded"));
app.use("/logout", express.static("logout"));
app.use("/verify", express.static("verify"));

app.get("/sapi", (req, res) => {
  supabase.from("src").select()
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.error(error));
});
