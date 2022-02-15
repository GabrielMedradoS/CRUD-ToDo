import { Router } from "express";

const router = Router();

const allToDos = [{ nome: "aaa", status: false }];

//C
router.post("/todos", (request, response) => {
  const { name } = request.body;

  allToDos.push({ name, status: false });
  return response.status(201).json(allToDos);
});

//R
router.get("/todos", (request, response) => {
  return response.status(200).json(allToDos);
});

//U
//D

export { router };
