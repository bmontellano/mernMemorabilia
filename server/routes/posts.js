import express from 'express';
import  { getPosts, createPosts } from '../controllers/posts.js'

const router = express.Router();

// localhost:3000/posts
router.get('/', getPosts)

export default router;