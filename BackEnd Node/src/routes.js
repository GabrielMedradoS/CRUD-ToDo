import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

const allToDos = [{ name: "aaa", status: false }];

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

export { router };
