// js/actions.js
import { taskArray, setTasks } from "./data.js";
import { renderTasks } from "./ui.js";

export function addTask(text) {
  if (text.trim() === "") return;

  const taskObj = {
    id: Date.now(),
    text,
    completed: false,
    isEditing: false,
  };

  taskArray.unshift(taskObj);
  renderTasks();
}

export function editTask(id) {
  taskArray.forEach((task) => {
    task.isEditing = task.id === id;
  });
  renderTasks();
}

export function deleteTask(id) {
  const updatedTasks = taskArray.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  renderTasks();
}

// export function searchTask(searchedtext) {
//   //if search box is empty render original taskArray

//   const searchOutput = taskArray.filter((task) =>
//     task.text.includes(searchedtext)
//   );
//   if (searchOutput.length === 0) {
//     console.log("no matching tasks");
//     noMatchRender();
//   } else {
//     setTasks(searchOutput);
//     renderTasks();
//   }
//   setTasks(taskArray);
//   renderTasks();
// }
