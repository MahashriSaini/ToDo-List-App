// js/actions.js
import { createTodo, getTodos, updateTodo, deleteTodo } from "./api.js";
import {
  setTasks,
  editingTaskId,
  clearEditingTask,
  setEditingTask,
} from "./data.js";
import { renderTasks } from "./ui.js";

const formDiv = document.getElementById("addTaskForm");
const taskForm = document.getElementById("taskForm");

export async function addTask(form) {
  const taskData = {
    title: form.title.value.trim(),
    description: form.description.value.trim(),
    priority: form.priority.value,
    dueDate: form.dueDate.value,
    category: form.category.value,
  };

  if (!taskData.title) return;

  if (editingTaskId !== null) {
    // UPDATE
    await updateTodo(editingTaskId, taskData);
    clearEditingTask();
  } else {
    // CREATE
    await createTodo(taskData);
  }

  // re-fetch from backend
  const todos = await getTodos();
  setTasks(todos);
  renderTasks();

  form.reset();
  formDiv.classList.remove("active");
}

export function editTask(task) {
  // refilling form with old details before it appears on ui when user clicks on edit button
  taskForm.title.value = task.title;
  taskForm.description.value = task.description;
  taskForm.priority.value = task.priority;
  taskForm.dueDate.value = task.dueDate;
  taskForm.category.value = task.category;

  setEditingTask(task.id);
  formDiv.classList.add("active");
}

export async function deleteTask(id) {
  await deleteTodo(id);

  const todos = await getTodos();
  setTasks(todos);
  renderTasks();
}
