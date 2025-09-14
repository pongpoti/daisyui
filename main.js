import express from "npm:express"
import process from "node:process"
import path from "node:path"

const app = express();
const port = process.env.PORT || 3000
const __dirname = import.meta.dirname

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.use(express.static(path.join(__dirname, "main")))
app.use("/completeupload", express.static("completeupload"))
app.use("/logout", express.static("logout"))
app.use("/otp", express.static("otp"))

console.log(Deno.env.get("HOME"))