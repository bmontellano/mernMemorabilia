import axios from 'axios';

//For localhost
const url = 'http://localhost:5000/posts';

//For Heroku server
/*
const url = 'https://memorabilia-project-server.herokuapp.com/posts';
*/
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const deleteAllPosts = () => axios.delete(url);

