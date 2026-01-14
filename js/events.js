// js/events.js
import { addTask } from "./actions.js";
import { saveTasks, setSearchQuery } from "./data.js";
import { renderTasks } from "./ui.js";

const inputTask = document.getElementById("inputTask");
const searchInput = document.getElementById("searchInput");
const doneButton = document.getElementById("doneButton");
const saveButton = document.getElementById("saveButton");

export function initEvents() {
  doneButton.addEventListener("click", () => {
    addTask(inputTask.value);
    inputTask.value = "";
  });

  saveButton.addEventListener("click", () => {
    saveTasks();
    alert("Tasks saved!");
  });

  searchInput.addEventListener("input", (e) => {
    setSearchQuery(e.target.value);
    renderTasks();
  })
}
