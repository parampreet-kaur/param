
var todoid: number = 5;

enum ToDoStatus {
    active = "active",
    done = "done",
}

class ToDo{
    id: string;
    description: string;
    status: ToDoStatus;

    constructor(id: string, description: string, status: ToDoStatus){
       this.id = id;
       this.description = description;
       this.status = status; 
    }
}

//Creating a default list of to-do items
var ToDoArray = [
    new ToDo("to-do-1", 'Go for a walk', ToDoStatus.active),
    new ToDo("to-do-2", 'Send an email for applying holidays in the month of October', ToDoStatus.active),
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.active),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.done),
];

class ToDoRender{
    
    renderToDo(toDo: ToDo){
        let cb = document.createElement("input");
        cb.setAttribute("type", "checkbox");
        cb.setAttribute("name", "toDoDone");
        cb.setAttribute("class", "w-100 m-0");
        cb.setAttribute("onclick", "markToDoItemDone(this.checked, '"+toDo.id+"')");
        if(toDo.status.toString() == ToDoStatus.done)
        {
            cb.setAttribute("checked", "true");
        }

        var checkboxDiv = document.createElement("div");
        checkboxDiv.setAttribute("class", "col-sm-1 to-do-done p-0");
        checkboxDiv.appendChild(cb);

        let spanElement = document.createElement("span");
        spanElement.innerText = toDo.description;

        var descDiv = document.createElement("div");
        descDiv.setAttribute("class", "col-sm-10 to-do-text p-0 pb-1 px-0_5");

        descDiv.appendChild(spanElement);

        let removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("class", "button no-outline fr remove-button");
        removeBtn.setAttribute("name", "removeToDo");
        removeBtn.setAttribute("value", "X");
        removeBtn.setAttribute("onclick", "removeToDoItem('"+toDo.id+"')");

        var removeBtnDiv = document.createElement("div");
        removeBtnDiv.setAttribute("class", "col-sm-1 remove-to-do p-0 pr-1");

        removeBtnDiv.appendChild(removeBtn);

        var toDoItem = document.createElement("div");
        toDoItem.setAttribute("id", toDo.id);
        toDoItem.setAttribute("class", toDo.status.toString()+" row to-do-item w-100 m-0 d-flex min-height-48 pt-1")

        toDoItem.appendChild(checkboxDiv);
        toDoItem.appendChild(descDiv);
        toDoItem.appendChild(removeBtnDiv);

        var toDoItems = document.getElementById("to-do-items");
        console.log("todoitems:"+toDoItems);
        if(toDoItems != null && typeof toDoItems != undefined)
        {
            toDoItems.appendChild(toDoItem);
        }
        
        console.log(toDo);
    }
}

class ToDoOperation{

    getNextId(): number{
        return todoid++;
    }

    addToDo(description: string){
        var newToDo: ToDo = new ToDo("to-do-"+this.getNextId(), description, ToDoStatus.active);
        
        ToDoArray.push({
            id : newToDo.id,
            description : newToDo.description,
            status : newToDo.status
        });
        var toDoRender: ToDoRender = new ToDoRender();
        toDoRender.renderToDo(newToDo);
        console.log(ToDoArray.toString());
    }

    renderCurrentToDos(){
        if(ToDoArray.length > 0){
            var toDoRender: ToDoRender = new ToDoRender();
            for(var eachToDo of ToDoArray){
                toDoRender.renderToDo(eachToDo);
            }
        }
        console.log("Rendered current todos");
    }

    removeToDo(id: string){
        let element = document.getElementById(id);
        ToDoArray.forEach(function(value, index){
            if(value.id === id)
            {
                ToDoArray.splice(index, 1);
            }
        });
        if(element != null)
        {
            element.remove();
        }
    }

    markDone(checked: boolean, id: string){
        let toDoItem = document.getElementById(id);
        if(toDoItem != null){
            if(checked){
                toDoItem.classList.remove(ToDoStatus.active.toString());
                toDoItem.classList.add(ToDoStatus.done.toString());
            }
            else{
                toDoItem.classList.remove(ToDoStatus.done.toString());
                toDoItem.classList.add(ToDoStatus.active.toString());
            }
        }
    }
}

function renderCurrentTodos(){
    var op: ToDoOperation = new ToDoOperation();
    op.renderCurrentToDos();
    console.log("done");
}

function addNewToDoItem(toDoInputValue: string){
    var op: ToDoOperation = new ToDoOperation();
    if(toDoInputValue != null && toDoInputValue.length > 0)
    {
        op.addToDo(toDoInputValue);
    }
}

function removeToDoItem(id: string){
    var op: ToDoOperation = new ToDoOperation();
    op.removeToDo(id);
}

function markToDoItemDone(checked: boolean, id: string){
    var op: ToDoOperation = new ToDoOperation();
    op.markDone(checked, id);
}
