import express from "npm:express";
import process from "node:process";
import path from "node:path";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const URL = Deno.env.get("URL");
const KEY = Deno.env.get("KEY");
const supabase = createClient(URL, KEY);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use(express.static(path.join(__dirname, "main")));
app.use("/uploaded", express.static("uploaded"));
app.use("/logout", express.static("logout"));
app.use("/verify", express.static("verify"));
app.use("/insert", express.static("insert"));

app.get("/sapi-select-all", (req, res) => {
  supabase.from("src").select().order("id", { ascending: true })
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error));
});

app.get("/sapi-insert-phonenumber", (req, res) => {
  const id = req.query.id;
  const phoneNumber = req.query.phonenumber;
  supabase.from("src").upsert({ id: id, phoneNumber: phoneNumber }).select()
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error));
});

app.get("/sapi-verify", (req, res) => {
  const phoneNumber = "0896678722";
  supabase.from("src").select().eq("phoneNumber", phoneNumber)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.error(error));
});
