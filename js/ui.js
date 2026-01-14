// js/ui.js
import { taskArray } from "./data.js";
import { editTask, deleteTask } from "./actions.js";

const taskList = document.getElementById("taskList");

// export function noMatchRender()
// {
//     const taskdiv = document.createElement("div");
//     taskdiv.className = "tasks";

//     const no = document.createElement("p");
//     no.innerText = "No tasks matched!";

//     taskdiv.appendChild(no);
//     taskList.appendChild(taskdiv); 
// }

export function renderTasks() {
  taskList.innerHTML = "";

  if (taskArray.length === 0) {
    const taskdiv = document.createElement("div");
    taskdiv.className = "tasks";

    const noTaskPara = document.createElement("p");
    noTaskPara.innerText = "No tasks yet!";

    taskdiv.appendChild(noTaskPara);
    taskList.appendChild(taskdiv);
  }

  taskArray.forEach((task) => {
    const taskdiv = document.createElement("div");
    taskdiv.className = "tasks";

    if (task.isEditing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = task.text;

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          task.text = editInput.value.trim();
          task.isEditing = false;
          renderTasks();
        }
      });

      taskdiv.appendChild(editInput);
    } else {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
      });

      const label = document.createElement("label");
      label.innerText = task.text;

      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", () => editTask(task.id));

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Remove";
      deleteButton.addEventListener("click", () => deleteTask(task.id));

      taskdiv.append(checkbox, label, editButton, deleteButton);
    }

    taskList.appendChild(taskdiv);
  });
}
