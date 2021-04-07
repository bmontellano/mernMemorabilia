import express from 'express';
import  { getPosts, createPost, getPost, updatePost, deletePost, likePost, deleteAllPosts } from '../controllers/posts.js'

const router = express.Router();

// localhost:3000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.delete('/:id', deletePost);
router.delete('/', deleteAllPosts);


export default router;