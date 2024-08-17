import PostMessage from "../models/postMessage.js";

export const getPosts =  async (req, res) => {
    try {
     const postMessages =  await PostMessage.find();

     const response = {
        success: true,
        message: "Data fetched Successfully",
        data: postMessages
     }
     res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({message: error.message, success: false});
    }
}

export const addPosts = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);

    try {
       await newPost.save();
       res.status(201).json(newPost);
    }

    catch (error) {
        res.status(400).json({message: error.message, success: false});
    }
}
