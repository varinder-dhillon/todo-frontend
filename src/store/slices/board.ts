import { createSlice } from "@reduxjs/toolkit";
import { getBoardThunkHandler,updateBoardThunkHandler, createBoardThunkHandler, createTaskThunkHandler, deleteTaskThunkHandler, updateTaskThunkHandler } from "../thunks/board";
import type { Board } from "../../types/board";

interface BoardState {
  board: Board | null;
}

const initialState: BoardState = {
  board: null,
}

const boardSlice = createSlice({
    name: "BOARD_SLICE",
    initialState,
    reducers:{

    },
    extraReducers(builder) {
      builder.addCase(getBoardThunkHandler.fulfilled, (state, action) => {
        state.board = action.payload;
      })
      builder.addCase(updateBoardThunkHandler.fulfilled, (state, action) => {
        state.board = {...state.board, ...action.payload};
      })

      builder.addCase(createBoardThunkHandler.fulfilled, (state, action) => {
        state.board = action.payload;
      })

      builder.addCase(createTaskThunkHandler.fulfilled, (state, action) => {
        if(action.payload) state.board?.tasks.push(action.payload);
      })
      
      builder.addCase(updateTaskThunkHandler.fulfilled, (state, action) => {
        if (state.board?.tasks) {
          state.board.tasks = state.board.tasks.map(task => {
            if(task._id === action.payload._id){
              return action.payload;
            }
            return task;
          });
        }
      })

      builder.addCase(deleteTaskThunkHandler.fulfilled, (state, action) => {
        if (state.board?.tasks) {
          state.board.tasks = state.board.tasks.filter(task => task._id !== action.payload.taskId);
        }
      })
    },
})

const {} = boardSlice.actions;

export default boardSlice;