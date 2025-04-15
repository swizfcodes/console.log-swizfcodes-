const todoList = [{
    name: '',
    dueDate: '01-01-2025'}];

renderTodoList();

function renderTodoList(){
        
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
        
          <div>${name}</div>
          <div>${dueDate}</div>
          <button id="js-delete" class="delete">Delete</button>
      `;
        todoListHTML += html; 
    });

    /*for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
            " class="delete">Delete</button>
      `;
        todoListHTML += html;
    }*/

    console.log(todoListHTML);
    document.querySelector('#js-list').innerHTML = todoListHTML;
    
    document.querySelectorAll('#js-delete').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}

function addTodo(){
    const inputElement = document.querySelector(
        '#js-input-todo'
    );
    const name = inputElement.value;

    const dateInputElement = document.querySelector(
        '#js-input-date'
    );
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

//document.getElementById('click').onclick = 
//function(){addTodo();};;  

const buttonElement = document.querySelector('#click');
buttonElement.addEventListener('click', () => {
  addTodo('ADD'); 
}); 

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addTodo('ADD');
    }
    console.log(event.key);
});

[
    'Wash dishes',
    'Wash youtube',
    'Make dinner'
].forEach(function(value, index){
    if (value === "wash dishes"){
        return;
    }

    console.log(value);
    console.log(index);
});