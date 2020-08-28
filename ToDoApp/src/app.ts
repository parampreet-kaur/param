
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
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.done),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.active),
];

class ToDoRender{
    
    //Function adds a new to-do item on the page.
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
        descDiv.setAttribute("class", "col-sm-10 to-do-text p-0 pb-1");

        descDiv.appendChild(spanElement);

        let removeIcon = document.createElement("i");
        removeIcon.setAttribute("class", "lar la-window-close remove-icon");
        removeIcon.setAttribute("onclick", "removeToDoItem('"+toDo.id+"')");
        
        var removeBtnDiv = document.createElement("div");
        removeBtnDiv.setAttribute("class", "col-sm-1 remove-to-do p-0 pr-1 pl-0_5");

        removeBtnDiv.appendChild(removeIcon);

        var toDoItem = document.createElement("div");
        toDoItem.setAttribute("id", toDo.id);
        toDoItem.setAttribute("class", toDo.status.toString()+" row to-do-item w-100 m-0 d-flex pt-1")

        toDoItem.appendChild(checkboxDiv);
        toDoItem.appendChild(descDiv);
        toDoItem.appendChild(removeBtnDiv);

        var toDoItems = document.getElementById("toDoItems");
        if(toDoItems != null && typeof toDoItems != undefined)
        {
            toDoItems.appendChild(toDoItem);
        }
    }
}

class ToDoOperation{

    //Function used to get the next available id number
    getNextId(): number{
        return todoid++;
    }

    //Function used when a new to-do item is being added
    addToDo(description: string){
        var newToDo: ToDo = new ToDo("to-do-"+this.getNextId(), description, ToDoStatus.active);
        
        ToDoArray.push({
            id : newToDo.id,
            description : newToDo.description,
            status : newToDo.status
        });
        var toDoRender: ToDoRender = new ToDoRender();
        toDoRender.renderToDo(newToDo);
        showNoDataText(false);
        let selectedFilter = document.querySelector(".to-do-filter-clicked") as HTMLElement;
        if(selectedFilter != null)
        {
            selectedFilter.click();
        }
    }

    //Function used to display the to-do items on page
    renderCurrentToDos(status ?: string){
        if(ToDoArray.length > 0){
            var toDoRender: ToDoRender = new ToDoRender();
            for(var eachToDo of ToDoArray){
                if(status != null)
                {
                    var toDoItem = document.getElementById(eachToDo.id);
                    if(toDoItem != null)
                    {
                        toDoItem.classList.add("d-none");
                        if(status === "active" && eachToDo.status == ToDoStatus.active.toString())
                        {
                            toDoItem.classList.remove("d-none");
                        }
                        else if(status === "done" && eachToDo.status == ToDoStatus.done.toString())
                        {
                            toDoItem.classList.remove("d-none");
                        }
                        else if(status === "all")
                        {
                            toDoItem.classList.remove("d-none");
                        }
                        else
                        {
                            toDoItem.classList.add("d-none");
                        }
                    }
                }
                else
                {
                    toDoRender.renderToDo(eachToDo);
                }
            }
            showNoDataText(false);
        }
        else
        {
            showNoDataText(true);
        }
    }

    //Function used to remove to-do item
    removeToDo(id: string){
        let toDoElement = document.getElementById(id);
        
        if(toDoElement != null)
        {
            ToDoArray.forEach(function(value, index){
                if(value.id === id)
                {
                    ToDoArray.splice(index, 1);
                }
            });
            toDoElement.remove();
        }
        if(ToDoArray.length == 0)
        {
            showNoDataText(true);
        }
    }

    //Function used to mark a to-do item done
    markDone(checked: boolean, id: string){
        let toDoItem = document.getElementById(id);
        if(toDoItem != null){
            
            if(checked){
                toDoItem.classList.remove(ToDoStatus.active.toString());
                toDoItem.classList.add(ToDoStatus.done.toString());
                ToDoArray.find((value) => {
                    if(value.id === id)
                    {
                        value.status = ToDoStatus.done;
                    }
                });
            }
            else{
                toDoItem.classList.remove(ToDoStatus.done.toString());
                toDoItem.classList.add(ToDoStatus.active.toString());
                ToDoArray.find((value) => {
                    if(value.id === id)
                    {
                        value.status = ToDoStatus.active;
                    }
                });
            }
        }
    }
}

//Function used to render the to-do items on the page when it is loaded or when some filter is applied
function renderCurrentTodos(status ?: string, element ?: HTMLElement){
    var op: ToDoOperation = new ToDoOperation();
    op.renderCurrentToDos(status);
    if(element != null)
    {
        let previousFilter = document.querySelector(".to-do-filter-clicked");
        if(previousFilter != null)
        {
            previousFilter.classList.remove("to-do-filter-clicked");
        }
        element.classList.add("to-do-filter-clicked");
    }
    displayCount();
}

//Function used to add a new to-do item in the list and display it on the page
function addNewToDoItem(toDoInputValue: string){
    var op: ToDoOperation = new ToDoOperation();
    if(toDoInputValue != null && toDoInputValue.trim().length > 0)
    {
        op.addToDo(toDoInputValue);
    }
    displayCount();
}

//Function used to remove the to-do item when cross icon is clicked
function removeToDoItem(id: string){
    var op: ToDoOperation = new ToDoOperation();
    op.removeToDo(id);
    displayCount();
}

//Function used to mark the to-do item done
function markToDoItemDone(checked: boolean, id: string){
    var op: ToDoOperation = new ToDoOperation();
    op.markDone(checked, id);
}

//Function used to show/hide the No data div
function showNoDataText(show: boolean)
{
    let noDataDiv = document.getElementById("noData");
    if(show)
    {
        if(noDataDiv != null && noDataDiv.classList.contains("d-none"))
        {
            noDataDiv.classList.remove("d-none");
        }
    }
    else
    {
        if(noDataDiv != null && !noDataDiv.classList.contains("d-none"))
        {
            noDataDiv.classList.add("d-none");
        }
    }
}

//Function used to display the total number of to-dos as a count
function displayCount(){
    let toDoCountElement = document.getElementById("toDoCount");
     if(toDoCountElement != null)
     {
         toDoCountElement.innerText = ToDoArray.length.toString();
     }
}