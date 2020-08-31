define("ToDo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToDoStatus;
    (function (ToDoStatus) {
        ToDoStatus["active"] = "active";
        ToDoStatus["done"] = "done";
    })(ToDoStatus = exports.ToDoStatus || (exports.ToDoStatus = {}));
    class ToDo {
        constructor(id, description, status) {
            this.id = id;
            this.description = description;
            this.status = status;
        }
    }
    exports.ToDo = ToDo;
});
define("ToDoRender", ["require", "exports", "ToDo"], function (require, exports, ToDo_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ToDoRender {
        renderToDo(toDo) {
            let cb = document.createElement("input");
            cb.setAttribute("type", "checkbox");
            cb.setAttribute("name", "toDoDone");
            cb.setAttribute("class", "w-100 m-0");
            cb.setAttribute("onclick", "markToDoItemDone(this.checked, '" + toDo.id + "')");
            if (toDo.status.toString() == ToDo_js_1.ToDoStatus.done) {
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
    exports.ToDoRender = ToDoRender;
});
define("ToDoOperation", ["require", "exports", "ToDo", "ToDoRender"], function (require, exports, ToDo_js_2, ToDoRender_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var todoid = 5;
    exports.ToDoArray = [
        new ToDo_js_2.ToDo("to-do-1", 'Go for a walk', ToDo_js_2.ToDoStatus.active),
        new ToDo_js_2.ToDo("to-do-2", 'Send an email for applying holidays in the month of October', ToDo_js_2.ToDoStatus.active),
        new ToDo_js_2.ToDo("to-do-3", 'Send laptop for repair', ToDo_js_2.ToDoStatus.done),
        new ToDo_js_2.ToDo("to-do-4", 'Pay electricity bill', ToDo_js_2.ToDoStatus.active),
    ];
    class ToDoOperation {
        getNextId() {
            return todoid++;
        }
        addToDo(description) {
            var newToDo = new ToDo_js_2.ToDo("to-do-" + this.getNextId(), description, ToDo_js_2.ToDoStatus.active);
            exports.ToDoArray.push({
                id: newToDo.id,
                description: newToDo.description,
                status: newToDo.status
            });
            var toDoRender = new ToDoRender_js_1.ToDoRender();
            toDoRender.renderToDo(newToDo);
            this.showNoDataText(false);
            let selectedFilter = document.querySelector(".to-do-filter-clicked");
            if (selectedFilter != null) {
                selectedFilter.click();
            }
        }
        renderCurrentToDos(status) {
            if (exports.ToDoArray.length > 0) {
                var toDoRender = new ToDoRender_js_1.ToDoRender();
                for (var eachToDo of exports.ToDoArray) {
                    if (status != null) {
                        var toDoItem = document.getElementById(eachToDo.id);
                        if (toDoItem != null) {
                            toDoItem.classList.add("d-none");
                            if (status === "active" && eachToDo.status == ToDo_js_2.ToDoStatus.active.toString()) {
                                toDoItem.classList.remove("d-none");
                            }
                            else if (status === "done" && eachToDo.status == ToDo_js_2.ToDoStatus.done.toString()) {
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
                exports.ToDoArray.forEach(function (value, index) {
                    if (value.id === id) {
                        exports.ToDoArray.splice(index, 1);
                    }
                });
                toDoElement.remove();
            }
            if (exports.ToDoArray.length == 0) {
                this.showNoDataText(true);
            }
        }
        markDone(checked, id) {
            let toDoItem = document.getElementById(id);
            if (toDoItem != null) {
                if (checked) {
                    toDoItem.classList.remove(ToDo_js_2.ToDoStatus.active.toString());
                    toDoItem.classList.add(ToDo_js_2.ToDoStatus.done.toString());
                    exports.ToDoArray.find((value) => {
                        if (value.id === id) {
                            value.status = ToDo_js_2.ToDoStatus.done;
                        }
                    });
                }
                else {
                    toDoItem.classList.remove(ToDo_js_2.ToDoStatus.done.toString());
                    toDoItem.classList.add(ToDo_js_2.ToDoStatus.active.toString());
                    exports.ToDoArray.find((value) => {
                        if (value.id === id) {
                            value.status = ToDo_js_2.ToDoStatus.active;
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
                toDoCountElement.innerText = exports.ToDoArray.length.toString();
            }
        }
    }
    exports.ToDoOperation = ToDoOperation;
    exports.markToDoItemDone = (checked, id) => {
        var op = new ToDoOperation();
        op.markDone(checked, id);
    };
});
define("app", ["require", "exports", "ToDoOperation"], function (require, exports, ToDoOperation_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderCurrentTodos(status, element) {
        var op = new ToDoOperation_js_1.ToDoOperation();
        op.renderCurrentToDos(status);
        if (element != null) {
            let previousFilter = document.querySelector(".to-do-filter-clicked");
            if (previousFilter != null) {
                previousFilter.classList.remove("to-do-filter-clicked");
            }
            element.classList.add("to-do-filter-clicked");
        }
        op.displayCount();
    }
    function addNewToDoItem(toDoInputValue) {
        var op = new ToDoOperation_js_1.ToDoOperation();
        if (toDoInputValue != null && toDoInputValue.trim().length > 0) {
            op.addToDo(toDoInputValue);
        }
        op.displayCount();
    }
    function removeToDoItem(id) {
        var op = new ToDoOperation_js_1.ToDoOperation();
        op.removeToDo(id);
        op.displayCount();
    }
    function markToDoItemDone(checked, id) {
        var op = new ToDoOperation_js_1.ToDoOperation();
        op.markDone(checked, id);
    }
});
//# sourceMappingURL=bundle.js.map