import express from "express";

const app = express();

app.use(express.json());

app.get("/healt", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("rodando"));
