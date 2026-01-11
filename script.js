inputTask = document.getElementById("inputTask");
doneButton = document.getElementById("doneButton");
taskList = document.getElementById("taskList");

let i = 0;

function doneButtonClicked() {
  let task = document.createElement("input");
  task.setAttribute("type", "checkbox");
  let label = document.createElement("label");

  i++;
  let taskId = `task${i}`;
  task.setAttribute("id", taskId);
  label.setAttribute("for", taskId);

  let taskValue = inputTask.value;
  label.innerText = taskValue;
  inputTask.value = "";

  let deleteButton = document.createElement("btn");
  let deleteButtonId = `deleteButton${i}`;
  deleteButton.setAttribute("id", deleteButtonId);
  deleteButton.innerText = "Remove";
  deleteButton.classList.add("deleteButtons");

  let taskdiv = document.createElement("div");
  let taskdivId = `taskdiv${i}`;
  taskdiv.setAttribute("id", taskdivId);
  taskdiv.classList.add("tasks");

  deleteButton.addEventListener("click", () => taskdiv.remove());

  taskdiv.appendChild(task);
  taskdiv.appendChild(label);
  taskdiv.appendChild(deleteButton);
  taskList.prepend(taskdiv);
}

doneButton.addEventListener("click", () => {
  if (inputTask.value != "") doneButtonClicked();
});
