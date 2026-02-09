import { signup, login } from "../apis/auth.api.js";
import { loadPage } from "../router.js";

export async function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = await login({ email, password });
  localStorage.setItem("token", data.token);
  loadPage("app");
}

export async function handleSignup() {
  const authError = document.getElementById("authError");
  authError.innerText = "";

  const userData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  };

  try {
    await signup(userData);
    localStorage.setItem("token", data.token);
    loadPage("app");
  } catch (err) {
    authError.innerText = err.message;
    authError.classList.remove(hidden);
  }
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
