import express from "express";
import cors from "cors";

import { router } from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.get("/health", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("rodando"));
