"use strict";
var todoid = 5;
var ToDoStatus;
(function (ToDoStatus) {
    ToDoStatus["active"] = "active";
    ToDoStatus["done"] = "done";
})(ToDoStatus || (ToDoStatus = {}));
class ToDo {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}
var ToDoArray = [
    new ToDo("to-do-1", 'Go for a walk', ToDoStatus.active),
    new ToDo("to-do-2", 'Send an email for applying holidays in the month of October', ToDoStatus.active),
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.active),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.done),
];
class ToDoRender {
    renderToDo(toDo) {
        let cb = document.createElement("input");
        cb.setAttribute("type", "checkbox");
        cb.setAttribute("name", "toDoDone");
        cb.setAttribute("class", "w-100 m-0");
        cb.setAttribute("onclick", "markToDoItemDone(this.checked, '" + toDo.id + "')");
        if (toDo.status.toString() == ToDoStatus.done) {
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
        removeIcon.setAttribute("onclick", "removeToDoItem('" + toDo.id + "')");
        var removeBtnDiv = document.createElement("div");
        removeBtnDiv.setAttribute("class", "col-sm-1 remove-to-do p-0 pr-1");
        removeBtnDiv.appendChild(removeIcon);
        var toDoItem = document.createElement("div");
        toDoItem.setAttribute("id", toDo.id);
        toDoItem.setAttribute("class", toDo.status.toString() + " row to-do-item w-100 m-0 d-flex pt-1");
        toDoItem.appendChild(checkboxDiv);
        toDoItem.appendChild(descDiv);
        toDoItem.appendChild(removeBtnDiv);
        var toDoItems = document.getElementById("to-do-items");
        console.log("todoitems:" + toDoItems);
        if (toDoItems != null && typeof toDoItems != undefined) {
            toDoItems.appendChild(toDoItem);
        }
        console.log(toDo);
    }
}
class ToDoOperation {
    getNextId() {
        return todoid++;
    }
    addToDo(description) {
        var newToDo = new ToDo("to-do-" + this.getNextId(), description, ToDoStatus.active);
        ToDoArray.push({
            id: newToDo.id,
            description: newToDo.description,
            status: newToDo.status
        });
        var toDoRender = new ToDoRender();
        toDoRender.renderToDo(newToDo);
        console.log(ToDoArray.toString());
    }
    renderCurrentToDos() {
        if (ToDoArray.length > 0) {
            var toDoRender = new ToDoRender();
            for (var eachToDo of ToDoArray) {
                toDoRender.renderToDo(eachToDo);
            }
        }
        console.log("Rendered current todos");
    }
    removeToDo(id) {
        let element = document.getElementById(id);
        ToDoArray.forEach(function (value, index) {
            if (value.id === id) {
                ToDoArray.splice(index, 1);
            }
        });
        if (element != null) {
            element.remove();
        }
    }
    markDone(checked, id) {
        let toDoItem = document.getElementById(id);
        if (toDoItem != null) {
            if (checked) {
                toDoItem.classList.remove(ToDoStatus.active.toString());
                toDoItem.classList.add(ToDoStatus.done.toString());
            }
            else {
                toDoItem.classList.remove(ToDoStatus.done.toString());
                toDoItem.classList.add(ToDoStatus.active.toString());
            }
        }
    }
}
function renderCurrentTodos() {
    var op = new ToDoOperation();
    op.renderCurrentToDos();
    console.log("done");
}
function addNewToDoItem(toDoInputValue) {
    var op = new ToDoOperation();
    if (toDoInputValue != null && toDoInputValue.trim.length > 0) {
        op.addToDo(toDoInputValue);
    }
}
function removeToDoItem(id) {
    var op = new ToDoOperation();
    op.removeToDo(id);
}
function markToDoItemDone(checked, id) {
    var op = new ToDoOperation();
    op.markDone(checked, id);
}
//# sourceMappingURL=app.js.map