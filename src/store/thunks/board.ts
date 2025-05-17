import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBoardThunkHandler =  createAsyncThunk(
    "getBoardThunkHandler",
    async (boardId:string) => {
        const boardReq = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/boards/${boardId}`);
        const boardData = await boardReq.json();

       return boardData.data;
    }
)