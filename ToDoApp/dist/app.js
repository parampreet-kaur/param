import { ToDoOperation } from './ToDoOperation.js';
let renderCurrentTodosOnLoad = () => {
    var op = new ToDoOperation();
    op.renderCurrentToDos();
    op.displayCount();
};
window.addEventListener('load', renderCurrentTodosOnLoad);
let filterAll = document.querySelector("#filterAll");
let filterActive = document.querySelector("#filterActive");
let filterDone = document.querySelector("#filterDone");
filterAll.addEventListener('click', function () {
    renderFilteredTodos('all', this);
});
filterActive.addEventListener('click', function () {
    renderFilteredTodos('active', this);
});
filterDone.addEventListener('click', function () {
    renderFilteredTodos('done', this);
});
function renderFilteredTodos(status, element) {
    var op = new ToDoOperation();
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
;
let toDoInput = document.querySelector("#toDoInput");
if (toDoInput != null) {
    toDoInput.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            addNewToDoItem(toDoInput.value);
            toDoInput.value = "";
        }
    });
}
let addButton = document.querySelector("#addToDoButton");
if (addButton != null) {
    addButton.addEventListener('click', function () {
        if (toDoInput != null) {
            addNewToDoItem(toDoInput.value);
            toDoInput.value = "";
        }
    });
}
function addNewToDoItem(toDoInputValue) {
    var op = new ToDoOperation();
    if (toDoInputValue != null && toDoInputValue.trim().length > 0) {
        op.addToDo(toDoInputValue);
    }
    op.displayCount();
}
//# sourceMappingURL=app.js.map