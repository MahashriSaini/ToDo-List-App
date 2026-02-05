//frontend/js/index.js
import { isLoggedIn } from "./actions/auth.action.js";
import { loadPage } from "./router.js";

async function initIndex() {
  if (isLoggedIn()) {
    loadPage("app");
  } else {
    loadPage("login");
  }
}

window.addEventListener("DOMContentLoaded", initIndex);
