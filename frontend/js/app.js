// js/app.js
import { getTodos } from "./api.js";
import { setTasks } from "./data.js";
import { renderTasks } from "./ui.js";
import { initEvents } from "./events.js";

async function initApp() {
  const savedTasks = await getTodos();
  setTasks(savedTasks);
  renderTasks();
  initEvents();
}

window.addEventListener("DOMContentLoaded", initApp);
