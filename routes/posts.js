const router = require("express").Router();
const { createPosts, getPosts } = require("../controller/postController");
const authorized = require("../middleware/authorized");
router.post("/createPost", authorized, createPosts);
router.get("/", getPosts);

module.exports = router;
