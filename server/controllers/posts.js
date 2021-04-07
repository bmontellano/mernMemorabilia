import mongoose from 'mongoose';
import PostMessage from '../models/postMessages.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    }
    catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post)
    }
    catch (err) {
        console.log(err)
    }
}

export const createPost = async (req, res) => {
    const { creator, title, message, selectedFile, tags } = req.body;

    const newPost = new PostMessage({ title, message, selectedFile, creator, tags });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(409).json({message: err.message})

    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { creator, title, message, selectedFile, tags} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with the id:${id}`);
    }
    try {
        const updatedPost = {title, message, selectedFile, creator, tags, _id: id}
        
        await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true});
        res.json(updatedPost);
    }
    catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with the id:${id}`);
    }

    await PostMessage.findByIdAndRemove(id);
    console.log('DELETE!')

    res.json({ message: 'Post deleted successfully'})
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with the id:${id}`);
    }

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true})
    res.json(updatedPost)
}

export const deleteAllPosts = async (req, res) => {
    try{
        await PostMessage.deleteMany({});
        res.status(201).json('Deleted ALL MEMORIES')
    } 
    catch (err) {
        res.status(404).json({message: err.message})
    }
}