const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    postsText: {
      type: String,
    },
    postImage: {
      type: String,
      default:"https://i.ibb.co/5n59Wjn/batch-5.jpg",
    },
    likes: {
      type: Number,
      default: 0,
    },
    liked: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userId:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    comments: [
      {
        text: {
          type: String,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("post", postSchema);
module.exports = Post;
