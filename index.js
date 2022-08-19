const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/user");
require("dotenv").config();
const port = process.env.PORT || 5000;

// parsor
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

app.get("/", (req, res) => res.send("In the name of Allah"));
app.listen(port, () => console.log(`server running port: ${port}`));
