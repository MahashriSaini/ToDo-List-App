// controllers/todo.controller.js
import { readTodos, writeTodos } from "../utils/fileHandler.js";
import { validateTodo } from "../utils/validateTodo.js";

export function getTodos(req, res) {
  res.json(readTodos());
}

export function createTodo(req, res) {
  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    ...req.body,
    completed: false,
  };

  const error = validateTodo(newTodo);
  if (error) {
    return res.status(422).json({ error });
  }

  todos.unshift(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
}

export function updateTodo(req, res) {
  const todos = readTodos();
  const id = Number(req.params.id);

  const error = validateTodo(req.body);
  if (error) {
    return res.status(422).json({ error });
  }

  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, ...req.body } : todo
  );

  writeTodos(updatedTodos);
  res.json({ message: "Todo updated" });
}

export function deleteTodo(req, res) {
  const todos = readTodos();
  const id = Number(req.params.id);

  writeTodos(todos.filter(todo => todo.id !== id));
  res.json({ message: "Todo deleted" });
}
