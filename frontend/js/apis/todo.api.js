const BASE_URL = "http://localhost:5000";

export async function getTodos() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
}

export async function createTodo(todo) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(todo),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong");
  }
  return data;
}

export async function updateTodo(id, updates) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong");
  }
  return data;
}

export async function deleteTodo(id) {
  const token = localStorage.getItem("token");
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
