// controllers/todo.controller.js
import { Todo } from "../models/todo.model.js";
import { validateTodo } from "../utils/validateTodo.js";

export async function getTodos(req, res) {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
}

export async function createTodo(req, res) {
  const error = validateTodo(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const todo = await Todo.create({
    ...req.body,
    userId: req.user.id,
  });

  res.status(201).json(todo);
}

export async function updateTodo(req, res) {
  const { id } = req.params;

  const error = validateTodo(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: id, userId: req.user.id },
    req.body,
    { new: true },
  );

  if (!updatedTodo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(updatedTodo);
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  const deletedTodo = await Todo.findOneAndDelete({
    _id: id,
    userId: req.user.id,
  });

  if (!deletedTodo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json({ message: "Todo deleted successfully" });
}
