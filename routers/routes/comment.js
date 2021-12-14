const express = require("express");
const commentRouter = express.Router();
const { authentication } = require("../../config/checkAuth");

const {
  newComment,
  deleteCommet,
  updateComment,
  getComment,
  getPostWithComments,
} = require("../controllers/comment");

commentRouter.post("/newComment/:id", newComment);
commentRouter.delete("/deletecomment/:id", authentication, deleteCommet);
commentRouter.put("/updatecomment/:id", authentication, updateComment);
commentRouter.post("/getComment", getComment);
commentRouter.get("/getPostWithComments/:_id", getPostWithComments);

module.exports = commentRouter;
