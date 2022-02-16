import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//C
router.post("/todos", async (request, response) => {
  const { name } = request.body;
  const createToDo = await prisma.todo.create({
    data: {
      name,
    },
  });

  return response.status(201).json(createToDo);
});

//R
router.get("/todos", (request, response) => {
  const getAllToDos = await prisma.todo.findMany();
  return response.status(200).json(getAllToDos);
});

//U
router.put("/todos", async (request, response) => {
  const { name, id, status } = request.body;

  if (!id) {
    return response.status(400).json("Id is mandatory");
  }

  const toDoAlreadyExist = await prisma.todo.findUnique({ where: { id } });
  if (!toDoAlreadyExist) {
    return response.status(404).json("To Do not exist");
  }

  const updateToDo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      status,
    },
  });

  return response.status(200).json(updateToDo);
});

//D
router.delete("/todos/:id", async (request, response) => {
  const { id } = request.params;

  //garantir que é um number
  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json("Id is mandatory");
  }

  const toDoAlreadyExist = await prisma.todo.findUnique({
    where: { id: intId },
  });
  if (!toDoAlreadyExist) {
    return response.status(404).json("To Do not exist");
  }

  await prisma.todo.delete({ where: { id: intId } });
  return response.status(200).send();
});

export { router };
