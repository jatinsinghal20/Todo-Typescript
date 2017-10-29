var COMPLETED = 'completed';
var ACTIVE = 'active';
var DELETED = 'deleted';
var todos = /** @class */ (function () {
    function todos() {
        this.my_todos = [];
        todos.nextID = 1;
    }
    todos.prototype.add = function (newTodo) {
        this.my_todos.push(newTodo);
    };
    todos.prototype.delete = function (id) {
        console.log(this.my_todos);
        this.my_todos[id - 1].status = DELETED;
        console.log(this.my_todos[id - 1]);
    };
    todos.prototype.changeStatus = function (id) {
        if (this.my_todos[id - 1].status === ACTIVE)
            this.my_todos[id - 1].status = COMPLETED;
        else
            this.my_todos[id - 1].status = ACTIVE;
    };
    todos.prototype.changeName = function (id, val) {
        this.my_todos[id - 1].name = val;
    };
    return todos;
}());
var todoList = new todos();
