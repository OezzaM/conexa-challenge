"use client";

import { CategoryEnum } from "@/app/common/enums";
import { Post } from "@/app/common/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  posts: Record<CategoryEnum, Record<number, Post[]>>;
  pagination: Record<CategoryEnum, number>;
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: { films: {}, peoples: {}, planets: {}, starships: {} },
  pagination: { films: 0, peoples: 0, planets: 0, starships: 0 },
  isLoading: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPagination: (state, action: PayloadAction<any>) => {
      const { posts, category } = action.payload;
      state.pagination[category as CategoryEnum] = posts.pagination.total;
    },
    addPosts: (state, action: PayloadAction<any>) => {
      const { posts, page, category } = action.payload;
      state.posts[category as CategoryEnum][page] = posts.collection;
    },
    setIsLoading: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload.loading;
    },
  },
});

export const { addPagination, addPosts, setIsLoading } = postsSlice.actions;

export default postsSlice.reducer;
