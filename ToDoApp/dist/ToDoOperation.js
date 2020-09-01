import ToDo, { ToDoStatus } from './ToDo.js';
import ToDoRender from './ToDoRender.js';
export var ToDoArray = [
    new ToDo("to-do-1", 'Go for a walk', ToDoStatus.active),
    new ToDo("to-do-2", 'Send an email for applying holidays in the month of October', ToDoStatus.active),
    new ToDo("to-do-3", 'Send laptop for repair', ToDoStatus.done),
    new ToDo("to-do-4", 'Pay electricity bill', ToDoStatus.active),
];
export default class ToDoOperation {
    constructor() {
        this.todoid = 5;
    }
    getNextId() {
        return this.todoid++;
    }
    addToDo(description) {
        var newToDo = new ToDo("to-do-" + this.getNextId(), description, ToDoStatus.active);
        ToDoArray.push(newToDo);
        var toDoRender = new ToDoRender();
        toDoRender.renderToDo(newToDo);
        this.showNoDataText(false);
        let selectedFilter = document.querySelector(".to-do-filter-clicked");
        selectedFilter.click();
    }
    renderCurrentToDos(filterStatus) {
        if (ToDoArray.length > 0) {
            var toDoRender = new ToDoRender();
            for (var eachToDo of ToDoArray) {
                if (filterStatus != null) {
                    var toDoItem = document.getElementById(eachToDo.id);
                    toDoItem.classList.add("d-none");
                    if (filterStatus === "active" && eachToDo.status == ToDoStatus.active.toString()) {
                        toDoItem.classList.remove("d-none");
                    }
                    else if (filterStatus === "done" && eachToDo.status == ToDoStatus.done.toString()) {
                        toDoItem.classList.remove("d-none");
                    }
                    else if (filterStatus === "all") {
                        toDoItem.classList.remove("d-none");
                    }
                    else {
                        toDoItem.classList.add("d-none");
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
        ToDoArray.forEach(function (value, index) {
            if (value.id === id) {
                ToDoArray.splice(index, 1);
            }
        });
        toDoElement.remove();
        if (ToDoArray.length == 0) {
            this.showNoDataText(true);
        }
    }
    markDone(checked, id) {
        let toDoItem = document.getElementById(id);
        if (checked) {
            toDoItem.classList.remove(ToDoStatus.active.toString());
            toDoItem.classList.add(ToDoStatus.done.toString());
            ToDoArray.forEach((value) => {
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
    showNoDataText(show) {
        let noDataDiv = document.getElementById("noData");
        if (show) {
            if (noDataDiv.classList.contains("d-none")) {
                noDataDiv.classList.remove("d-none");
            }
        }
        else {
            if (!noDataDiv.classList.contains("d-none")) {
                noDataDiv.classList.add("d-none");
            }
        }
    }
    displayCount() {
        let toDoCountAll = document.getElementById("toDoCountAll");
        let toDoCountActive = document.getElementById("toDoCountActive");
        let toDoCountDone = document.getElementById("toDoCountDone");
        toDoCountAll.innerText = ToDoArray.length.toString();
        toDoCountActive.innerText = ToDoArray.filter((value) => {
            if (value.status == ToDoStatus.active.toString()) {
                return value;
            }
        }).length.toString();
        toDoCountDone.innerText = ToDoArray.filter((value) => {
            if (value.status == ToDoStatus.done.toString()) {
                return value;
            }
        }).length.toString();
    }
}
//# sourceMappingURL=ToDoOperation.js.map