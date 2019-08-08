/* eslint-disable prettier/prettier */
// combine the reducers
import { combineReducers } from "redux";
import { GET_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, GET_POST, GET_POST_FAIL, GET_POST_SUCCESS, GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, GET_IMAGE, GET_IMAGE_FAIL, GET_IMAGE_SUCCESS } from "../actions";

let postsData = { data: [], loading: false, error: false };
let postData = { data: [], loading: false, error: false };
let userData = { data: [], loading: false, error: false };
let imageData = { data: [], loading: false, error: false };


// all posts reducer
const postsDataReducer = (state = postsData, action) => {
    switch (action.type) {
        case GET_POSTS:
            state = Object.assign({}, state, { loading: true });
            return state;
        case GET_POSTS_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case GET_POSTS_FAIL:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};


// single post
const postDataReducer = (state = postData, action) => {
    switch (action.type) {
        case GET_POST:
            state = Object.assign({}, state, { loading: true });
            return state;
        case GET_POST_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case GET_POST_FAIL:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

// single user
const userDataReducer = (state = userData, action) => {
    switch (action.type) {
        case GET_USER:
            state = Object.assign({}, state, { loading: true });
            return state;
        case GET_USER_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case GET_USER_FAIL:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

// image details
const imageDataReducer = (state = imageData, action) => {
    switch (action.type) {
        case GET_IMAGE:
            state = Object.assign({}, state, { loading: true });
            return state;
        case GET_IMAGE_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case GET_IMAGE_FAIL:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    postDataReducer, postsDataReducer, userDataReducer, imageDataReducer
});

export default rootReducer;
