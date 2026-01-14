// js/data.js
export let taskArray = [];


export function setTasks(newTasks) {
  taskArray = newTasks;
}

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

export function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) return [];
  return JSON.parse(savedTasks);
}

