import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import commentReducer from "./slices/commentSlice";

export default configureStore({
    reducer: {
        post: postReducer,
        comment: commentReducer
    }
});

