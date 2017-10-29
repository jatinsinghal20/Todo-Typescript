var btn = document.getElementById("btn");
var todo = document.getElementById("new_todo");
var active = document.getElementById('active');
var completed = document.getElementById('complete');
var deleted = document.getElementById('deleted');

var showTodoElements = function () {
    active.innerHTML= completed.innerHTML = deleted.innerHTML =  "";
    //console.log(todoList.my_todos)
    todoList.my_todos.forEach((item)=>{
        var child = createElement(item);
        if(item.status === ACTIVE){
            active.appendChild(child);
        }
        else if(item.status === COMPLETED){
            completed.appendChild(child);
        }
        else deleted.appendChild(child)
    })
};

var createElement = function(todo){
    let newElement = document.createElement('div');
    newElement.setAttribute('id', todo.id);
    console.log(todo.status);
    if (todo.status !== DELETED) {
        newElement.setAttribute('class', 'row');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('value', todo.id);
        checkbox.setAttribute('data-id', todo.id);
        checkbox.setAttribute('onchange', 'changeStatusTodo('+todo.id+')');
        if (todo.status === COMPLETED) {
            checkbox.checked = 'TRUE';
        }

        checkbox.setAttribute('class', 'col-2 check_box');
        newElement.appendChild(checkbox);
        let label = document.createElement('label');
        label.innerText = todo.name;
        label.setAttribute('class', 'col-8');
        label.setAttribute('id','l'+todo.id);
        label.setAttribute('onclick' , 'update('+todo.id+')');
        newElement.appendChild(label);
        let close = document.createElement('button');
        close.setAttribute('class', 'icon close');
        close.innerHTML = '&times;';
        close.setAttribute('onclick', 'deleteTodo('+todo.id+')');
        newElement.appendChild(close);
    } else newElement.innerText = todo.name;
    //console.log(newElement);
    return newElement;

};

var addTodo = function () {

    var newtodo = {};

    newtodo.name = todo.value;
    newtodo.status = 'active';
    newtodo.id = todos.nextID++;

    todoList.add(newtodo);
    active.appendChild(createElement(newtodo));

    todo.value = "" ;
    todo.placeholder = "ENTER A NEW TASK";
};

var deleteTodo = function(id){
    todoList.delete(id);
    showTodoElements();
};

var changeStatusTodo = function (id) {
    todoList.changeStatus(id);
    showTodoElements();
};

var update = function (id) {
    var val = prompt("Enter New Name");
    if(val&&val.trim()!== ""){
        todoList.changeName(id, val);
        document.getElementById('l'+id).innerText = val;
    }
};


