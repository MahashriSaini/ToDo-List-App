// js/events.js
import { addTask } from "./actions.js";
import { setSearchQuery, setSortMode } from "./data.js";
import { renderTasks } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const addTaskButton = document.getElementById("addTaskbtn");
const formDiv = document.getElementById("addTaskForm");
const saveFormButton = document.getElementById("saveForm");
const taskForm = document.getElementById("taskForm");

const sortbtn = document.getElementById("sortbtn");
const choiceForSort = document.getElementById("choiceForSort");
const sortSelect = document.getElementById("sortSelect");

export function initEvents() {
  //  Search
  searchInput.addEventListener("input", (e) => {
    setSearchQuery(e.target.value);
    renderTasks();
  });

  //  Open add-task form
  addTaskButton.addEventListener("click", () => {
    formDiv.classList.add("active");
  });

  //  Save task (create / update)
  saveFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskForm);
  });

  //  Sort button
  sortbtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortbtn.classList.add("inactive");
    choiceForSort.classList.add("active");
  });

  //  Sort selection
  sortSelect.addEventListener("change", (e) => {
    setSortMode(e.target.value);
    choiceForSort.classList.remove("active");
    sortbtn.classList.remove("inactive");
    renderTasks();
  });
}
