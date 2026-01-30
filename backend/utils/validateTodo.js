export function validateTodo(todo) {
  if (!todo.title || typeof todo.title !== "string") {
    return "Title is required";
  }

  if (todo.title.length > 100) {
    return "Title too long";
  }

  const validPriorities = ["Low", "Medium", "High"];
  if (!validPriorities.includes(todo.priority)) {
    return "Invalid priority";
  }

  const validCategories = ["Work", "Personal", "Study"];
  if (!validCategories.includes(todo.category)) {
    return "Invalid category";
  }

  if (todo.dueDate) {
    const due = new Date(todo.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(due.getTime())) {
      return "Invalid due date";
    }

    if (due < today) {
      return "Due date cannot be in the past";
    }
  }

  return null;
}
