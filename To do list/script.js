const addBtn = document.getElementById('add-btn');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Add new task
addBtn.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Complete feature
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Delete button
  const actions = document.createElement('span');
  actions.className = 'todo-actions';
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    li.remove();
  });
  actions.appendChild(delBtn);
  li.appendChild(actions);

  todoList.appendChild(li);
  newTaskInput.value = '';
}