import express from "npm:express";
import process from "node:process";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

app.use("/daisyui", express.static("daisyui"));