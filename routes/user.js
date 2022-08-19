const router = require("express").Router();
const { createUserContoller, allUser } = require("../controller/userController");
router.get("/", allUser);
router.post("/signup", createUserContoller);

module.exports = router;
