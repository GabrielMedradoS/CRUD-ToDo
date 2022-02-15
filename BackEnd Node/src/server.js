import express from "express";
import { router } from "./routes.js";

const app = express();

app.use(express.json());
app.use(router);

app.get("/healt", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("rodando"));
