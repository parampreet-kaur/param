interface ToDoFilter{
    name: string,
    id: string
}

export let filters:ToDoFilter[] = [
    {
        name : "all",
        id : "#filterAll"
    },
    {
        name : "active",
        id : "#filterActive"
    },
    {
        name : "done",
        id : "#filterDone"
    } 
];