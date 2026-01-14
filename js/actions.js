// js/actions.js
import { taskArray, setTasks } from "./data.js";
import { renderTasks } from "./ui.js";

export function addTask(text) {
  if (text.trim() === "") return;

  const taskObj = {
    id: Date.now(),
    text,
    completed: false,
    isEditing: false,
  };

  taskArray.unshift(taskObj);
  renderTasks();
}

export function editTask(id) {
  taskArray.forEach((task) => {
    task.isEditing = task.id === id;
  });
  renderTasks();
}

export function deleteTask(id) {
  const updatedTasks = taskArray.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  renderTasks();
}

