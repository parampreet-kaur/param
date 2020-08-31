export enum ToDoStatus {
    active = "active",
    done = "done",
}

export class ToDo{
    id: string;
    description: string;
    status: ToDoStatus;

    constructor(id: string, description: string, status: ToDoStatus){
       this.id = id;
       this.description = description;
       this.status = status; 
    }
}