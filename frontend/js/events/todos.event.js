// js/events.js
import { addTask } from "../actions/todos.action.js";
import { setSearchQuery, setSortMode } from "../data.js";
import { renderTasks } from "../ui.js";


export function initEvents() {
  //  Search
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    setSearchQuery(e.target.value);
    renderTasks();
  });

  //  Open add-task form
  const addTaskButton = document.getElementById("addTaskbtn");
  const formDiv = document.getElementById("addTaskForm");
  addTaskButton.addEventListener("click", () => {
    formDiv.classList.add("active");
  });

  //  Save task (create / update)
  const saveFormButton = document.getElementById("saveForm");
  const taskForm = document.getElementById("taskForm");
  saveFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskForm);
  });

  //  Sort button
  const sortbtn = document.getElementById("sortbtn");
const choiceForSort = document.getElementById("choiceForSort");
  sortbtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortbtn.classList.add("inactive");
    choiceForSort.classList.add("active");
  });

  //  Sort selection
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", (e) => {
    setSortMode(e.target.value);
    choiceForSort.classList.remove("active");
    sortbtn.classList.remove("inactive");
    renderTasks();
  });
}
