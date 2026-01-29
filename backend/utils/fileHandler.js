import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "todos.json");

export function readTodos() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function writeTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}
