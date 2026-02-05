// js/ui.js
import { taskArray, searchQuery, sortMode } from "./data.js";
import { editTask, deleteTask } from "./actions/todos.action.js";


function getVisibleTasks() {
   let tasks = taskArray.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortMode === "dueDate") {
    tasks = [...tasks].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
  }

  if (sortMode === "priority") {
    const order = { High: 1, Medium: 2, Low: 3 };
    tasks = [...tasks].sort(
      (a, b) => order[a.priority] - order[b.priority]
    );
  }

  return tasks;
}


function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  const taskMain = document.createElement("div");
  taskMain.className = "task-main";

  const taskHeader = document.createElement("div");
  taskHeader.className = "task-header";

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.className = "task-checkbox";
  taskCheckbox.checked = task.completed;

  taskCheckbox.addEventListener("change", () => {
    task.completed = taskCheckbox.checked;
  });

  const taskTitle = document.createElement("label");
  taskTitle.className = "task-title";
  taskTitle.innerText = task.title;

  const taskPriority = document.createElement("span");
  taskPriority.className = "task-priority";
  taskPriority.classList.add(task.priority.toLowerCase());
  taskPriority.innerText = task.priority;

  taskHeader.append(taskCheckbox, taskTitle, taskPriority);

  const taskMeta = document.createElement("div");
  taskMeta.className = "task-meta";

  const taskDueDate = document.createElement("span");
  taskDueDate.className = "task-due-date";
  taskDueDate.innerText = task.dueDate;

  const taskCategory = document.createElement("span");
  taskCategory.className = "task-category";
  taskCategory.innerText = task.category;

  taskMeta.append(taskDueDate, taskCategory);

  const taskDesc = document.createElement("p");
  taskDesc.className = "task-desc";
  taskDesc.innerText = task.description;

  taskMain.append(taskHeader, taskMeta, taskDesc);

  const taskActions = document.createElement("div");
  taskActions.className = "task-actions";

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("btn", "edit-btn");
  editButton.addEventListener("click", () => editTask(task));

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove";
  deleteButton.classList.add("btn", "delete-btn");
  deleteButton.addEventListener("click", () => deleteTask(task.id));

  taskActions.append(editButton, deleteButton);

  taskCard.append(taskMain, taskActions);

  return taskCard;
}

export function renderTasks() {
  const taskList = document.getElementById("taskList"); 
  taskList.innerHTML = "";

  const visibleTasks = getVisibleTasks();

  if (visibleTasks.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.innerText = searchQuery ? "No tasks matched!" : "No tasks yet!";
    taskList.appendChild(message);
    return;
  }

  visibleTasks.forEach((task) => {
    taskList.appendChild(createTaskCard(task));
  });
}
