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
    fetchedItemById: null,
  },
  extraReducers: {
    [fetchSuggestions.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addSuggestion.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [deleteSuggestion.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.fetchedItemById.upvote_count += 1;
    },
    [editSuggestion.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion.id === action.payload._id
      );
      state.items[index] = action.payload;
    },
    [fetchSuggestionItem.fulfilled](state, action) {
      state.fetchedItemById = action.payload;
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
    [comment.fulfilled](state, action) {
      state.fetchedItemById.comments.push(action.payload);
    },
    [replyComment.fulfilled](state, action) {
      state.fetchedItemById.commentsReplies.push(action.payload);
    },
  },
});

export const suggestionsReducer = suggestionsSlice.reducer;
