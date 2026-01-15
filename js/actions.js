// js/actions.js
import {
  taskArray,
  setTasks,
  editingTaskId,
  clearEditingTask,
  setEditingTask,
} from "./data.js";
import { renderTasks } from "./ui.js";

const formDiv = document.getElementById("addTaskForm");
const taskForm = document.getElementById("taskForm");

export function createTask(taskData) {
  const taskObj = {
    id: Date.now(),
    title: taskData.title,
    description: taskData.description,
    priority: taskData.priority,
    dueDate: taskData.dueDate,
    category: taskData.category,
    completed: false,
    isEditing: false,
  };
  taskArray.unshift(taskObj);
}

export function updateTask(editingTaskId, taskData) {
  taskArray.forEach((task) => {
    if (task.id === editingTaskId) {
      task.title = taskData.title;
      task.description = taskData.description;
      task.priority = taskData.priority;
      task.dueDate = taskData.dueDate;
      task.category = taskData.category;
      task.isEditing = false;
    }
  });
  clearEditingTask();
}

export function addTask(form) {
  const taskData = {
    title: form.title.value.trim(),
    description: form.description.value.trim(),
    priority: form.priority.value,
    dueDate: form.dueDate.value,
    category: form.category.value,
  };

  if (taskData.title === "") return;

  if (editingTaskId !== null) {
    updateTask(editingTaskId, taskData);
  } else {
    createTask(taskData);
  }

  renderTasks();
  form.reset(); // clear inputs
}

export function editTask(task) {
  taskForm.title.value = task.title;
  taskForm.description.value = task.description;
  taskForm.priority.value = task.priority;
  taskForm.dueDate.value = task.dueDate;
  taskForm.category.value = task.category;
  formDiv.classList.add("active");
  taskArray.forEach((t) => {
    if (task.id === t.id) {
      t.isEditing = true;
    }
  });
  //once the form appears next on everything is handled by functionality associated with form
  setEditingTask(task.id);
}

export function deleteTask(id) {
  const updatedTasks = taskArray.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  renderTasks();
}
