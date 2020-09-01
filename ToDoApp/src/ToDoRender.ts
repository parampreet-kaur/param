import ToDo, {ToDoStatus} from './ToDo.js';
import ToDoOperation from './ToDoOperation.js';

export default class ToDoRender{
    
    //Function adds a new to-do item on the page.
    public renderToDo(toDo: ToDo){
        let cb = document.createElement("input");
        cb.setAttribute("type", "checkbox");
        cb.setAttribute("name", "toDoDone");
        cb.setAttribute("class", "w-100 m-0");
        cb.addEventListener('click', function(){
            var op: ToDoOperation = new ToDoOperation();
            op.markDone(this.checked, toDo.id);
        });
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
        removeIcon.addEventListener('click', function(){
            var toDoOperation: ToDoOperation = new ToDoOperation();
            toDoOperation.removeToDo(toDo.id);
            toDoOperation.displayCount();
        });
        
        var removeBtnDiv = document.createElement("div");
        removeBtnDiv.setAttribute("class", "col-sm-1 remove-to-do p-0 pr-1 pl-0_5");

        removeBtnDiv.appendChild(removeIcon);

        var toDoItem = document.createElement("div");
        toDoItem.setAttribute("id", toDo.id);
        toDoItem.setAttribute("class", toDo.status.toString()+" row to-do-item w-100 m-0 d-flex pt-1")

        toDoItem.appendChild(checkboxDiv);
        toDoItem.appendChild(descDiv);
        toDoItem.appendChild(removeBtnDiv);

        var toDoItems = document.getElementById("toDoItems")!;
        toDoItems.appendChild(toDoItem);
    }
}