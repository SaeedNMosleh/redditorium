import {createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        subredditName: '',
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.subredditName = action.payload.subredditName;
            state.posts = action.payload.posts;
        }
    }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;