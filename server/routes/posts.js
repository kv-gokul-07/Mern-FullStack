import express from 'express';
import { addPosts, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPosts);


export default router;