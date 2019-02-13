import axios from 'axios';

export const fetchContentSuccess = (payload) => {
    return {
        type: "GET_ALL_CONTENT",
        payload
    };
}

export const fetchContentAction = (pageId = 1) => {
    let request = axios.get(`https://reqres.in/api/users?page=${pageId}`);
    return request;
}