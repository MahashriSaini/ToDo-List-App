//server.js
import express from "express";
import cors from "cors";
import { readTodos, writeTodos } from "./utils/fileHandler.js";
import { validateTodo } from "./utils/validateTodo.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(`server running on ${PORT}`);
  res.send(`Server running on port ${PORT}`);
});

//get all todos
app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

//add a new todo
app.post("/todos", (req, res) => {
  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    ...req.body,
    completed: false,
  };

  const validateResponse = validateTodo(newTodo);
  if(validateResponse !== null)
  {
    return res.status(422).json({error: validateResponse});
  }

  todos.unshift(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
});

//update a todo
app.put("/todos/:id", (req, res) => {
  const todos = readTodos();
  const id = Number(req.params.id);

const validateResponse = validateTodo(req.body);
  if(validateResponse !== null)
  {
    return res.status(422).json({error: validateResponse});
  }

  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...req.body } : todo,
  );

  writeTodos(updatedTodos);
  res.json({ message: "Todo updated" });
});

//Delete a todo
app.delete("/todos/:id", (req, res) => {
  const todos = readTodos();
  const id = Number(req.params.id);

  const filteredTodos = todos.filter((todo) => todo.id !== id);
  writeTodos(filteredTodos);

  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
