import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "todos.json");
const userData = path.join(process.cwd(), "src", "data", "userData.json");

export function readTodos() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function writeTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

export function readUserData() {
    const data = fs.readFileSync(userData, "utf-8");
  return JSON.parse(data);
}

export function writeUserData(data) {
  fs.writeFileSync(userData, JSON.stringify(data, null, 2));
}