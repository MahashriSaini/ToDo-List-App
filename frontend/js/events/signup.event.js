import { loadPage } from "../router.js";
import { handleSignup } from "../actions/auth.action.js";

export function initSignup() {
  const signupForm = document.getElementById("signupForm");
  const goLogin = document.getElementById("goLogin");

  goLogin?.addEventListener("click", () => {
    loadPage("login");
  });

  signupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    handleSignup();
  });
}
