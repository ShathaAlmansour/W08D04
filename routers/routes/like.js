const express = require("express");
const likeRouter = express.Router();
const { authentication } = require("../../config/checkAuth");
const { newLike } = require("../controllers/like");

likeRouter.get("/like/:id", authentication, newLike);

module.exports = likeRouter;
