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
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.done),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.active),
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
        removeBtnDiv.setAttribute("class", "col-sm-1 remove-to-do p-0 pr-1 pl-0_5");
        removeBtnDiv.appendChild(removeIcon);
        var toDoItem = document.createElement("div");
        toDoItem.setAttribute("id", toDo.id);
        toDoItem.setAttribute("class", toDo.status.toString() + " row to-do-item w-100 m-0 d-flex pt-1");
        toDoItem.appendChild(checkboxDiv);
        toDoItem.appendChild(descDiv);
        toDoItem.appendChild(removeBtnDiv);
        var toDoItems = document.getElementById("toDoItems");
        if (toDoItems != null && typeof toDoItems != undefined) {
            toDoItems.appendChild(toDoItem);
        }
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
        showNoDataText(false);
        let selectedFilter = document.querySelector(".to-do-filter-clicked");
        if (selectedFilter != null) {
            selectedFilter.click();
        }
    }
    renderCurrentToDos(status) {
        if (ToDoArray.length > 0) {
            var toDoRender = new ToDoRender();
            for (var eachToDo of ToDoArray) {
                if (status != null) {
                    var toDoItem = document.getElementById(eachToDo.id);
                    if (toDoItem != null) {
                        toDoItem.classList.add("d-none");
                        if (status === "active" && eachToDo.status == ToDoStatus.active.toString()) {
                            toDoItem.classList.remove("d-none");
                        }
                        else if (status === "done" && eachToDo.status == ToDoStatus.done.toString()) {
                            toDoItem.classList.remove("d-none");
                        }
                        else if (status === "all") {
                            toDoItem.classList.remove("d-none");
                        }
                        else {
                            toDoItem.classList.add("d-none");
                        }
                    }
                }
                else {
                    toDoRender.renderToDo(eachToDo);
                }
            }
            showNoDataText(false);
        }
        else {
            showNoDataText(true);
        }
    }
    removeToDo(id) {
        let toDoElement = document.getElementById(id);
        if (toDoElement != null) {
            ToDoArray.forEach(function (value, index) {
                if (value.id === id) {
                    ToDoArray.splice(index, 1);
                }
            });
            toDoElement.remove();
        }
        if (ToDoArray.length == 0) {
            showNoDataText(true);
        }
    }
    markDone(checked, id) {
        let toDoItem = document.getElementById(id);
        if (toDoItem != null) {
            if (checked) {
                toDoItem.classList.remove(ToDoStatus.active.toString());
                toDoItem.classList.add(ToDoStatus.done.toString());
                ToDoArray.find((value) => {
                    if (value.id === id) {
                        value.status = ToDoStatus.done;
                    }
                });
            }
            else {
                toDoItem.classList.remove(ToDoStatus.done.toString());
                toDoItem.classList.add(ToDoStatus.active.toString());
                ToDoArray.find((value) => {
                    if (value.id === id) {
                        value.status = ToDoStatus.active;
                    }
                });
            }
        }
    }
}
function renderCurrentTodos(status, element) {
    var op = new ToDoOperation();
    op.renderCurrentToDos(status);
    if (element != null) {
        let previousFilter = document.querySelector(".to-do-filter-clicked");
        if (previousFilter != null) {
            previousFilter.classList.remove("to-do-filter-clicked");
        }
        element.classList.add("to-do-filter-clicked");
    }
    displayCount();
}
function addNewToDoItem(toDoInputValue) {
    var op = new ToDoOperation();
    if (toDoInputValue != null && toDoInputValue.trim().length > 0) {
        op.addToDo(toDoInputValue);
    }
    displayCount();
}
function removeToDoItem(id) {
    var op = new ToDoOperation();
    op.removeToDo(id);
    displayCount();
}
function markToDoItemDone(checked, id) {
    var op = new ToDoOperation();
    op.markDone(checked, id);
}
function showNoDataText(show) {
    let noDataDiv = document.getElementById("noData");
    if (show) {
        if (noDataDiv != null && noDataDiv.classList.contains("d-none")) {
            noDataDiv.classList.remove("d-none");
        }
    }
    else {
        if (noDataDiv != null && !noDataDiv.classList.contains("d-none")) {
            noDataDiv.classList.add("d-none");
        }
    }
}
function displayCount() {
    let toDoCountElement = document.getElementById("toDoCount");
    if (toDoCountElement != null) {
        toDoCountElement.innerText = ToDoArray.length.toString();
    }
}
//# sourceMappingURL=app.js.map