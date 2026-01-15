// js/data.js
export let taskArray = [];
export let searchQuery = "";
export let editingTaskId = null;

export function setTasks(newTasks) {
  taskArray = newTasks;
}

export function setSearchQuery(query) {
  searchQuery = query;
}

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

export function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) return [];
  return JSON.parse(savedTasks);
}

export function setEditingTask(id) {
  editingTaskId = id;
}

export function clearEditingTask() {
  editingTaskId = null;
}
