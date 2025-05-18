import type { IconKey } from "../utils/contants";
export type TaskStatus =  "inProgress" | "completed" | "wontDo";

export interface TaskBase {
  name: string;
  description: string;
  icon: IconKey;
  status: TaskStatus | "";
  boardId: string;
}

export interface Task extends TaskBase {
    _id: string,
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