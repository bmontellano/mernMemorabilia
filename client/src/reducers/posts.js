import {FETCH_ALL, CREATE, UPDATE, LIKE, DELETE, DELETE_ALL} from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            //return action posts
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case DELETE_ALL:
            return [];
        default:
            return posts;
    }   
}