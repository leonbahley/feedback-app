import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSuggestions,
  addSuggestion,
  deleteSuggestion,
  editSuggestion,
  fetchSuggestionItem,
  upvote,
  comment,
  replyComment,
} from "./suggestions_operations.js";

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    items: [],
    error: null,
    fetchedItemById: null,
  },
  extraReducers: {
    [fetchSuggestions.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload;
    },
    [fetchSuggestions.rejected](state, action) {
      state.error = action.payload;
    },
    [addSuggestion.fulfilled](state, action) {
      state.error = null;
      // state.items.push(action.payload);
    },
    [addSuggestion.rejected](state, action) {
      state.error = action.payload;
    },
    [deleteSuggestion.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(
        (suggestion) => suggestion.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.fetchedItemById.upvote_count += 1;
    },
    [deleteSuggestion.rejected](state, action) {
      state.error = action.payload;
    },

    [editSuggestion.fulfilled](state, action) {
      state.error = null;
      // const index = state.items.findIndex(
      //   (suggestion) => suggestion.id === action.payload.id
      // );
      // state.items[index].name = action.payload.name;
      // state.items[index].number = action.payload.number;
    },
    [editSuggestion.rejected](state, action) {
      state.error = action.payload;
    },
    [fetchSuggestionItem.fulfilled](state, action) {
      state.fetchedItemById = action.payload;
    },
    [fetchSuggestionItem.rejected](state, action) {
      state.error = action.payload;
    },
    [upvote.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion._id === action.payload
      );
      if (state.items.length !== 0) {
        state.items[index].upvote_count += 1;
      }
      if (
        state.fetchedItemById &&
        state.fetchedItemById._id === action.payload
      ) {
        state.fetchedItemById.upvote_count += 1;
      }
    },
    [upvote.rejected](state, action) {
      state.error = action.payload;
    },
    [comment.fulfilled](state, action) {
      state.error = null;
      state.fetchedItemById.comments.push(action.payload);
    },
    [comment.rejected](state, action) {
      state.error = action.payload;
    },
    [replyComment.fulfilled](state, action) {
      state.error = null;
      state.fetchedItemById.commentsReplies.push(action.payload);
    },
    [replyComment.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const suggestionsReducer = suggestionsSlice.reducer;
