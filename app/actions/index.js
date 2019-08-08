/* eslint-disable prettier/prettier */
// set all actions
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const GET_IMAGE = "GET_IMAGE";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAIL = "GET_IMAGE_FAIL";



const URL = "https://jsonplaceholder.typicode.com";

export function getPosts() {

    return (dispatch) => {
        dispatch({ type: GET_POSTS });
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        fetch(
            URL + "/posts",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                // add user name for each posts
                responseJson.forEach((element, index) => {
                    this.getUserDetail(element.userId, (value) => {
                        element.name = value;
                    });
                    if (responseJson.length == (index + 1)) {
                        dispatch({ type: GET_POSTS_SUCCESS, data: responseJson });
                    }
                });
                // console.log('getPosts result - ', responseJson);
            }).catch((err) => {
                dispatch({ type: GET_POSTS_FAIL });
                console.log('getPosts Err- ', err);
            });
    };

}

export function getPostDetail(id) {

    return (dispatch) => {
        dispatch({ type: GET_POST });
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        fetch(
            URL + "/posts/" + id,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                dispatch({ type: GET_POST_SUCCESS, data: responseJson });
            }).catch((err) => {
                dispatch({ type: GET_POST_FAIL });
                console.log('getPostDetail Err- ', err);
            });
    };

}

export function getUserDetail(id, callback) {

    return (dispatch) => {
        dispatch({ type: GET_USER });
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        fetch(
            URL + "/users/" + id,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                dispatch({ type: GET_USER_SUCCESS, data: responseJson });
                callback(responseJson.name);
                // console.log('getUserDetail result - ', responseJson);
            }).catch((err) => {
                dispatch({ type: GET_USER_FAIL });
                console.log('getUserDetail Err- ', err);
            });
    };

}

export function getImageDetail(id) {
    console.log(id);
    return (dispatch) => {
        dispatch({ type: GET_IMAGE });
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        fetch(
            URL + "/photos?albumId=" + id,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                dispatch({ type: GET_IMAGE_SUCCESS, data: responseJson });
                // console.log('getUserDetail result - ', responseJson);
            }).catch((err) => {
                dispatch({ type: GET_IMAGE_FAIL });
                console.log('getImageDetail Err- ', err);
            });
    };

}