inputTask = document.getElementById("inputTask");
doneButton = document.getElementById("doneButton");
taskList = document.getElementById("taskList");
const saveButton = document.getElementById("saveButton");

let i = 0;
let taskArray = [];

function renderTasks() {
  taskList.innerHTML = "";

  taskArray.forEach((task) => {
    const taskdiv = document.createElement("div");
    taskdiv.className = "tasks";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const label = document.createElement("label");
    label.innerText = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove";
    deleteButton.classList.add("deleteButtons");

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
    });

    taskdiv.append(checkbox, label, deleteButton);
    taskList.append(taskdiv);
  });
}

function deleteTask(id) {
  taskArray = taskArray.filter((task) => task.id !== id);
  renderTasks();
}

function doneButtonClicked() {
  if (inputTask.value.trim() === "") return;

  const taskObj = {
    id: Date.now(), // unique id
    text: inputTask.value,
    completed: false,
  };

  taskArray.unshift(taskObj);
  inputTask.value = "";

  renderTasks();
}

function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) return;

  taskArray = JSON.parse(savedTasks);
  renderTasks();
}

saveButton.addEventListener("click", () => {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  alert("Tasks saved!");
});

window.addEventListener("DOMContentLoaded", loadTasks);
doneButton.addEventListener("click", doneButtonClicked);
