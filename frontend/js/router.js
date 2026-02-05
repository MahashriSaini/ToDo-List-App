//frontend/js/router.js
import { initLogin} from "./events/login.event.js";
import {initSignup} from "./events/signup.event.js"
import { initApp } from "./app.js";


const root = document.getElementById("root");

export async function loadPage(page) {
  const res = await fetch(`pages/${page}.html`);
  const html = await res.text();
  root.innerHTML = html;

   if (page === "login") {
    initLogin();
  }

  if (page === "signup") {
    initSignup();
  }
  if (page === "app")
  {
    requestAnimationFrame(() => {
    initApp();
  });
  }
}
