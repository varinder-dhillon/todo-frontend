type TaskStatus =  "inProgress" | "completed" | "wontDo";

export interface Task {
    _id: string,
    name: string,
    description: string,
    icon: string,
    status: TaskStatus,
    boardId: string,
    __v?: number,
    createdAt?: string,
    updatedAt?: string,
}

export interface Board {
    _id: string,
    id: string,
    name: string,
    description: string,
    __v?: number,
    createdAt?: string,
    updatedAt?: string,
    tasks: Task[]
}