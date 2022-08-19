const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: [true, "Email already taken"],
    },
    profilePicture: {
      type: String,
      default: "https://i.ibb.co/HCQ2MLL/profile.jpg",
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = new model("User", userSchema);
module.exports = User;
