import ToDoOperation from './ToDoOperation.js';
import { filters } from './ToDoFilter.js';
var toDoOperation = new ToDoOperation();
let renderCurrentTodosOnLoad = () => {
    toDoOperation.renderCurrentToDos();
    toDoOperation.displayCount();
};
window.addEventListener('load', renderCurrentTodosOnLoad);
filters.forEach((filter) => {
    let element = document.querySelector(filter.id);
    element.addEventListener('click', function () {
        renderFilteredTodos(filter.name, this);
    });
});
function renderFilteredTodos(status, element) {
    toDoOperation.renderCurrentToDos(status);
    let previousFilter = document.querySelector(".to-do-filter-clicked");
    previousFilter.classList.remove("to-do-filter-clicked");
    element.classList.add("to-do-filter-clicked");
    toDoOperation.displayCount();
}
;
let toDoInput = document.querySelector("#toDoInput");
toDoInput.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        addNewToDoItem(toDoInput.value);
        toDoInput.value = "";
    }
});
let addButton = document.querySelector("#addToDoButton");
addButton.addEventListener('click', function () {
    addNewToDoItem(toDoInput.value);
    toDoInput.value = "";
});
function addNewToDoItem(toDoInputValue) {
    if (toDoInputValue != null && toDoInputValue.trim().length > 0) {
        toDoOperation.addToDo(toDoInputValue);
    }
    toDoOperation.displayCount();
}
//# sourceMappingURL=app.js.map