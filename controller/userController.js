const User = require("../models/userSchema");

const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config/config");
const jwt = require("jsonwebtoken");
exports.createUserContoller = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body;
    const newUser = await User.create({
      name,
      email,
      profilePicture,
      password: await bcrypt.hash(password, 10),
    });
    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        password: newUser.password,
      },
      JWT_SECRET,
      { expiresIn: "7 d" }
    );
    res.status(201).json({ msg: "User Create successfull", newUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

exports.allUser = async (req, res) => {
  try {
    const alluser = await User.find({});
    res.status(200).json({ alluser, message: "User found" });
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};
