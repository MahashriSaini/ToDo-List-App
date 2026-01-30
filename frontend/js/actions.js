// js/actions.js
import { createTodo, getTodos, updateTodo, deleteTodo } from "./api.js";
import {
  setTasks,
  editingTaskId,
  clearEditingTask,
  setEditingTask,
} from "./data.js";
import { renderTasks } from "./ui.js";
import { validateTask } from "./inputValidation.js";

const formDiv = document.getElementById("addTaskForm");
const taskForm = document.getElementById("taskForm");
const invalidInput = document.getElementById("invalidInput");

export async function addTask(form) {
  const taskData = {
    title: form.title.value.trim(),
    description: form.description.value.trim(),
    priority: form.priority.value,
    dueDate: form.dueDate.value,
    category: form.category.value,
  };

  // frontend validation
  const inputResponse = validateTask(taskData);
  if (inputResponse !== null) {
    invalidInput.classList.add("active");
    invalidInput.innerText = inputResponse;
    return;
  }

  try {
    if (editingTaskId !== null) {
      await updateTodo(editingTaskId, taskData);
      clearEditingTask();
    } else {
      await createTodo(taskData);
    }

    // only runs if API succeeded
    const todos = await getTodos();
    setTasks(todos);
    renderTasks();

    form.reset();
    formDiv.classList.remove("active");
    invalidInput.classList.remove("active");

  } catch (error) {
    // backend validation error (422 etc)
    invalidInput.classList.add("active");
    invalidInput.innerText = error.message;
  }
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
