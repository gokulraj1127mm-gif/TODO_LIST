const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("div");
  delBtn.textContent = "X";
  delBtn.className = "delete";

  delBtn.onclick = () => {
    li.style.animation = "slideOut 0.3s ease";
    setTimeout(() => li.remove(), 250);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
