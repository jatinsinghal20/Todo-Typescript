interface todo{
    id : number,
    name : string,
    status : string
}

const COMPLETED ='completed';
const ACTIVE ='active';
const DELETED ='deleted';

class todos{
    my_todos : todo[];
    static nextID : number;
    constructor(){
        this.my_todos = [];
        todos.nextID = 1;
    }

    add(newTodo : todo){
        this.my_todos.push(newTodo);
    }

    delete(id: number){
        console.log(this.my_todos);
        this.my_todos[id-1].status = DELETED;
        console.log(this.my_todos[id-1]);
    }

    changeStatus ( id: number){
        if(this.my_todos[id-1].status === ACTIVE)
            this.my_todos[id-1].status = COMPLETED;
        else
            this.my_todos[id-1].status = ACTIVE;
    }

    changeName (id : number , val : string){
        this.my_todos[id-1].name = val;
    }
}

var todoList = new todos();