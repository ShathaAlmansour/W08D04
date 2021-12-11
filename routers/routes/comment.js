const express = require("express");
const commentRouter = express.Router();
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

const {
  newComment,
  deleteCommet,
  updateComment,
  getComment,
  getPostWithComments,
} = require("../controllers/comment");
commentRouter.post("/newComment", newComment);
commentRouter.delete("/deletecomment/:_id", authentication, deleteCommet);
commentRouter.put("/updatecomment/:_id", authentication, updateComment);
commentRouter.get("/getComment", getComment);
commentRouter.get("/getPostWithComments/:_id", getPostWithComments);

module.exports = commentRouter;
