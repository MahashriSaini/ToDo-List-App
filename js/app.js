// js/app.js
import { loadTasks, setTasks } from "./data.js";
import { renderTasks } from "./ui.js";
import { initEvents } from "./events.js";

function initApp() {
  const savedTasks = loadTasks();
  setTasks(savedTasks);
  renderTasks();
  initEvents();
}

window.addEventListener("DOMContentLoaded", initApp);
