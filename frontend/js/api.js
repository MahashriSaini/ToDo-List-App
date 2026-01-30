const BASE_URL = "http://localhost:5000";

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/todos`);
  return res.json();
}

export async function createTodo(todo) {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const data = await res.json();

  if(!res.ok){
    throw new Error(data.error || "Something went wrong");
  }
  return data;
}

export async function updateTodo(id, updates) {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  const data = await res.json();

  if(!res.ok){
    throw new Error(data.error || "Something went wrong");
  }
  return data;
}

export async function deleteTodo(id) {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
}
