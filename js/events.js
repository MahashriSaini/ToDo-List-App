// js/events.js
import { addTask } from "./actions.js";
import { saveTasks } from "./data.js";

const inputTask = document.getElementById("inputTask");
//const taskToSearch = document.getElementById("searchInput");
const doneButton = document.getElementById("doneButton");
const saveButton = document.getElementById("saveButton");
//const searchButton = document.getElementById("searchButton")

export function initEvents() {
  doneButton.addEventListener("click", () => {
    addTask(inputTask.value);
    inputTask.value = "";
  });

  saveButton.addEventListener("click", () => {
    saveTasks();
    alert("Tasks saved!");
  });

//   searchButton.addEventListener("click", () =>{
//    searchTask(taskToSearch.value);
//   });
}
