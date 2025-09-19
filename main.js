import express from "npm:express";
import process from "node:process";
import path from "node:path";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const supabaseUrl = Deno.env.get("supabaseUrl");
const supabaseKey = Deno.env.get("supabaseKey");
const supabase = createClient(supabaseUrl, supabaseKey);
const { data, error } = await supabase
    .from("src")
    .select()

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

app.use(express.static(path.join(__dirname, "main")));
app.use("/completeupload", express.static("completeupload"));
app.use("/logout", express.static("logout"));
app.use("/verify", express.static("verify"));

app.get("/sapi", (req, res) => {
    console.log(data);
    res.json(data);
});
