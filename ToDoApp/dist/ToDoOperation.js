import { ToDo, ToDoStatus } from './ToDo.js';
import { ToDoRender } from './ToDoRender.js';
var todoid = 5;
export var ToDoArray = [
    new ToDo("to-do-1", 'Go for a walk', ToDoStatus.active),
    new ToDo("to-do-2", 'Send an email for applying holidays in the month of October', ToDoStatus.active),
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.done),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.active),
];
export class ToDoOperation {
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
        this.showNoDataText(false);
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
            this.showNoDataText(false);
        }
        else {
            this.showNoDataText(true);
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
            this.showNoDataText(true);
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
    showNoDataText(show) {
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
    displayCount() {
        let toDoCountElement = document.getElementById("toDoCount");
        if (toDoCountElement != null) {
            toDoCountElement.innerText = ToDoArray.length.toString();
        }
    }
}
//# sourceMappingURL=ToDoOperation.js.map