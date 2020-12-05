
let selectedListItem = document.getElementById('selectedListItem');
let addTodoBtn = document.getElementById('addTodoBtn');
let listItems = document.getElementById('listItems');
let inputTodo = document.getElementById('inputTodo');



let todos = [];

addTodoBtn.addEventListener('click', function(){
  let todo = inputTodo.value;
  todos.push(todo);
  console.log(todos);

  let li = document.createElement('li');
  let box = document.createElement('div');
  box.classList.add("todo-box");
  li.textContent = todos[todos.length-1];
  box.appendChild(li);
  listItems.appendChild(box);
  inputTodo.value = '';
});

