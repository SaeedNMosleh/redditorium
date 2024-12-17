import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: 'commentsLink',
    initialState: {
        commentsLink: ''
    },
    reducers: {
        setCommentsLink: (state, action) => {
            state.commentsLink = action.payload;
        }
    }
});

export const { setCommentsLink } = commentSlice.actions;
export default commentSlice.reducer;