import ToDoOperation from './ToDoOperation.js';
import {filters} from './ToDoFilter.js';

var toDoOperation: ToDoOperation = new ToDoOperation();
//Function used to render the to-do items on the page when it is loaded
let renderCurrentTodosOnLoad = () => {
    toDoOperation.renderCurrentToDos();
    toDoOperation.displayCount();
};
window.addEventListener('load', renderCurrentTodosOnLoad);

//Providing filters for to-dos
filters.forEach((filter) => {
    let element = document.querySelector(filter.id)! as HTMLElement;
    element.addEventListener('click', function(){
        renderFilteredTodos(filter.name, this);
    });
});

//Function used to render the to-do items on the page based on filter
function renderFilteredTodos(status ?: string, element ?: HTMLElement){
    toDoOperation.renderCurrentToDos(status);
    let previousFilter = document.querySelector(".to-do-filter-clicked")!;
    previousFilter.classList.remove("to-do-filter-clicked");
    element!.classList.add("to-do-filter-clicked");
    toDoOperation.displayCount();
};

//adding a new to-do item when enter is pressed
let toDoInput = document.querySelector("#toDoInput")! as HTMLInputElement;
toDoInput.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        addNewToDoItem(toDoInput.value);
        toDoInput.value = "";
    }
});

//adding a new to-do item when 'Add' button is clicked
let addButton = document.querySelector("#addToDoButton")! as HTMLInputElement;
addButton.addEventListener('click', function(){
    addNewToDoItem(toDoInput.value);
    toDoInput.value = "";
});

//Function used to add a new to-do item in the list and display it on the page
function addNewToDoItem(toDoInputValue: string){
    if(toDoInputValue != null && toDoInputValue.trim().length > 0)
    {
        toDoOperation.addToDo(toDoInputValue);
    }
    toDoOperation.displayCount();
}