// frontend/js/app.js
import { getTodos } from "./apis/todo.api.js";
import { setTasks } from "./data.js";
import { renderTasks } from "./ui.js";
import { initEvents } from "./events/todos.event.js";
import { loadPage } from "./router.js";

export async function initApp() {
 try {
    const savedTasks = await getTodos();
    setTasks(savedTasks);
    renderTasks();
    initEvents();
  } catch (err) {
    console.error(err);
    // token invalid → force logout
    localStorage.removeItem("token");
    loadPage("login");
  }
}
