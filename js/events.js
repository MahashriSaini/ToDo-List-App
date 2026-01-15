// js/events.js
import { addTask } from "./actions.js";
import { saveTasks, setSearchQuery } from "./data.js";
import { renderTasks } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const saveButton = document.getElementById("saveButton");
const addTaskButton = document.getElementById("addTask");
const formDiv = document.getElementById("addTaskForm");
const saveFormButton = document.getElementById("saveForm");
const taskForm = document.getElementById("taskForm");

export function initEvents() {
  saveButton.addEventListener("click", () => {
    saveTasks();
    alert("Tasks saved!");
  });

  searchInput.addEventListener("input", (e) => {
    setSearchQuery(e.target.value);
    renderTasks();
  });

  addTaskButton.addEventListener("click", () => {
    formDiv.classList.add("active");
  });

  saveFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskForm);
    formDiv.classList.remove("active");
  });
}
