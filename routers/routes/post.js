const express = require("express");
const postRouter = express.Router();
const { authentication } = require("../../config/checkAuth");
const {
  newPost,
  softDel,
  updatePost,
  geAllPost,
  getPost,
  deleteCommentOwner,
} = require("../controllers/post");
postRouter.get("/post/:_id", getPost);
postRouter.get("/allPost", authentication, geAllPost);
postRouter.put("/updatePost/:_id", authentication, updatePost);
postRouter.post("/newPost", authentication, newPost);
postRouter.put("/softDelete/:_id", authentication, softDel);
postRouter.delete(
  "/ownerDelteComment/:postId/:commentId",
  authentication,
  deleteCommentOwner
);

module.exports = postRouter;
