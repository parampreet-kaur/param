"use strict";
var ToDoStatus;
(function (ToDoStatus) {
    ToDoStatus["active"] = "active";
    ToDoStatus["done"] = "done";
    ToDoStatus["deleted"] = "deleted";
})(ToDoStatus || (ToDoStatus = {}));
class ToDo {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}
class ToDoRender {
    renderToDo(toDo) {
        let todoHtml = `
        <div id="to-do-id" class="to-do-status row to-do-item w-100 m-0 d-flex min-height-48 pt-1">
            <div class="col-sm-1 to-do-done p-0">
                <input type="checkbox" name="toDoDone" class="w-100 m-0">
            </div>
            <div class="col-sm-10 to-do-text p-0 pb-1 px-0_5">
                <span>
                to-do-description
                </span>
            </div>
            <div class="col-sm-1 remove-to-do p-0 pr-1">
                <input type="button" class="button no-outline fr remove-button" name="removeToDo" value="X">
            </div>
        </div>
        `;
        todoHtml.replace("to-do-id", toDo.id.toString());
        todoHtml.replace("to-do-description", toDo.description);
        todoHtml.replace("to-do-status", toDo.status.toString());
        console.log(toDo);
    }
}
var todoid = 1;
var ToDoArray = [
    new ToDo("to-do-1", 'First todo', ToDoStatus.active),
    new ToDo("to-do-2", 'Second todo', ToDoStatus.deleted),
    new ToDo("to-do-3", 'Third todo', ToDoStatus.active),
    new ToDo("to-do-4", 'Fourth todo', ToDoStatus.done),
];
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
}
var op = new ToDoOperation();
op.renderCurrentToDos();
console.log("done");
//# sourceMappingURL=app.js.map