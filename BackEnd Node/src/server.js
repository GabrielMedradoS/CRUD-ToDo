import express from "express";
import cors from "cors";
// cross-origin resource sharing (para garantir a segurança das rotas que serão usadas no projeto)

import { router } from "./routes.js";

/*  Middleware é um software que permite a comunicação ou conectividade entre dois ou 
mais aplicativos e/ou componentes de aplicativos em uma rede distribuída. */
const app = express();

// analisa o JSON e coloca os dados no req.body
app.use(express.json());
// abilita o express server a responder preflight request
app.use(cors());

app.use(router);

app.get("/health", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("rodando"));
