const Post = require("../models/postsSchema");

// create post 
exports.createPosts = async (req, res) => {
  try {
    const { postsText, postImage } = req.body;
    const createPost = await Post({
      postsText,
      postImage,
      userId:req.user.id
    });
    const savePost = await createPost.save();
    console.log(savePost);
    return res
      .status(201)
      .json({ post: savePost, message: "Post successfuly created" });
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

exports.getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("userId");
    return res.status(200).json({ allPosts, message: "Posts found" });
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};
