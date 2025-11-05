const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling complete
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
} 

// allow pressing Enter to add
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
