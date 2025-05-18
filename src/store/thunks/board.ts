import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task, TaskBase } from "../../types/board";
export const getBoardThunkHandler =  createAsyncThunk(
    "getBoardThunkHandler",
    async (boardId:string) => {
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/boards/${boardId}`);
        const boardData = await boardReq.json();

       return boardData.data;
    }
)

export const createBoardThunkHandler =  createAsyncThunk(
    "createBoardThunkHandler",
    async () => {
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/boards`, {
            method: "POST"
        });
        const boardData = await boardReq.json();
        localStorage.setItem("boardId", boardData.data._id);
       return boardData.data;
    }
)

export const createTaskThunkHandler =  createAsyncThunk(
    "createTaskThunkHandler",
    async (reqBody:TaskBase) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/tasks`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers:myHeaders
        });
        const boardData = await boardReq.json();
       return boardData.data;
    }
)

export const updateTaskThunkHandler =  createAsyncThunk(
    "updateTaskThunkHandler",
    async (body:{reqBody:TaskBase, taskId:string}) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/tasks/${body.taskId}`, {
            method: "PATCH",
            body: JSON.stringify(body.reqBody),
            headers:myHeaders
        });
        const boardData = await boardReq.json();
       return boardData.data;
    }
)

export const deleteTaskThunkHandler =  createAsyncThunk(
    "deleteTaskThunkHandler",
    async (taskId:string) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/tasks/${taskId}`, {
            method: "DELETE"
        });
        const boardData = await boardReq.json();
       return {taskId, ...boardData};
    }
)