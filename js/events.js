// js/events.js
import { addTask } from "./actions.js";
import { saveTasks, setSearchQuery, setSortMode } from "./data.js";
import { renderTasks } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const saveButton = document.getElementById("saveButton");
const addTaskButton = document.getElementById("addTaskbtn");
const formDiv = document.getElementById("addTaskForm");
const saveFormButton = document.getElementById("saveForm");
const taskForm = document.getElementById("taskForm");
const sortbtn = document.getElementById("sortbtn");
const choiceForSort = document.getElementById("choiceForSort");
const sortSelect = document.getElementById("sortSelect");

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
  
  sortbtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortbtn.classList.add("inactive");
    choiceForSort.classList.add("active");
    //next on everything will be handled by sortselect through options
  })

  sortSelect.addEventListener("change", (e) => {
  setSortMode(e.target.value);
  choiceForSort.classList.remove("active");
  sortbtn.classList.remove("inactive");
  renderTasks();
});


}
