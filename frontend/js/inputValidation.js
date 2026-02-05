export function validateTask(taskData) {
  if (!taskData.title) {
    return "Title is required**";
  }

  if (taskData.title.length > 100) {
    return "Title too long**";
  }

  if(!taskData.dueDate) {
    return "Enter due date **"
  }
  if (taskData.dueDate && new Date(taskData.dueDate) < new Date()) {
    return "Due date cannot be in the past**";
  }

  return null; // valid
}
