// js/data.js
export let taskArray = [];
export let searchQuery = "";
export let editingTaskId = null;
export let sortMode = "none"; // none/ priority/ due date

export function setTasks(newTasks) {
  taskArray = newTasks;
}

export function setSearchQuery(query) {
  searchQuery = query;
}

export function setSortMode(mode) {
  sortMode = mode;
}

export function setEditingTask(id) {
  editingTaskId = id;
}

export function clearEditingTask() {
  editingTaskId = null;
}
