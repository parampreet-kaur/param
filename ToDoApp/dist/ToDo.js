export var ToDoStatus;
(function (ToDoStatus) {
    ToDoStatus["active"] = "active";
    ToDoStatus["done"] = "done";
})(ToDoStatus || (ToDoStatus = {}));
export class ToDo {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}
//# sourceMappingURL=ToDo.js.map