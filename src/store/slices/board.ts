import { createSlice } from "@reduxjs/toolkit";
import { getBoardThunkHandler } from "../thunks/board";
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
        // Add user to the state array
        state.board = action.payload;
      })
    },
})

const {} = boardSlice.actions;

export default boardSlice;