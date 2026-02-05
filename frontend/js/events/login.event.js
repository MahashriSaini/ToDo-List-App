import { loadPage } from "../router.js";
import { handleLogin } from "../actions/auth.action.js";

export function initLogin() {
const loginForm = document.getElementById("loginForm");
const goSignup = document.getElementById("goSignup");

goSignup.addEventListener("click", () => {
  loadPage("signup");
});

loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    handleLogin();
})
}
