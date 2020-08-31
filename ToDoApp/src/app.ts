import {ToDoOperation, ToDoArray} from './ToDoOperation.js';

//Function used to render the to-do items on the page when it is loaded
let renderCurrentTodosOnLoad = () => {
    var op: ToDoOperation = new ToDoOperation();
    op.renderCurrentToDos();
    op.displayCount();
};
window.addEventListener('load', renderCurrentTodosOnLoad);

//Providing filters for to-dos
let filterAll = document.querySelector("#filterAll") as HTMLElement;
let filterActive = document.querySelector("#filterActive") as HTMLElement;
let filterDone = document.querySelector("#filterDone") as HTMLElement;
filterAll.addEventListener('click', function(){
    renderFilteredTodos('all', this);
});
filterActive.addEventListener('click', function(){
    renderFilteredTodos('active', this);
});
filterDone.addEventListener('click', function(){
    renderFilteredTodos('done', this);
});

//Function used to render the to-do items on the page based on filter
function renderFilteredTodos(status ?: string, element ?: HTMLElement){
    var op: ToDoOperation = new ToDoOperation();
    op.renderCurrentToDos(status);
    if(element != null)
    {
        let previousFilter = document.querySelector(".to-do-filter-clicked");
        if(previousFilter != null)
        {
            previousFilter.classList.remove("to-do-filter-clicked");
        }
        element.classList.add("to-do-filter-clicked");
    }
    op.displayCount();
};

//adding a new to-do item when enter is pressed
let toDoInput = document.querySelector("#toDoInput") as HTMLInputElement;
if(toDoInput != null)
{
    toDoInput.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            addNewToDoItem(toDoInput.value);
            toDoInput.value = "";
        }
    });
}

//adding a new to-do item when 'Add' button is clicked
let addButton = document.querySelector("#addToDoButton") as HTMLInputElement;
if(addButton != null)
{
    addButton.addEventListener('click', function(){
        if(toDoInput != null)
        {
            addNewToDoItem(toDoInput.value);
            toDoInput.value = "";
        }
    });
}

//Function used to add a new to-do item in the list and display it on the page
function addNewToDoItem(toDoInputValue: string){
    var op: ToDoOperation = new ToDoOperation();
    if(toDoInputValue != null && toDoInputValue.trim().length > 0)
    {
        op.addToDo(toDoInputValue);
    }
    op.displayCount();
}