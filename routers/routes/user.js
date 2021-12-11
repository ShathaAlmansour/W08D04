const express = require("express");
const userRoute = express.Router();

const {
  resgister,
  login,
  getalluser,
  deletuser,
  resetPassword,
  activate,
  logout,
  gotoReset,
  forgotPassword,
} = require("./../controllers/user");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

userRoute.post("/resgister", resgister);
userRoute.post("/login", login);
userRoute.get("/allusers", getalluser);
userRoute.delete("/userdelet/:_id", authentication, authorization, deletuser);
userRoute.get("/login/err", (req, res) =>
  res.json({ err: "Incorrect Email/Password" })
);
userRoute.get("/login/success", (req, res) => res.json({ success: "success" }));
userRoute.get("/activate/:token", activate);
userRoute.post("/forgot", forgotPassword);
userRoute.post("/reset/:id", resetPassword);
userRoute.get("/forgot/:token", gotoReset);
userRoute.get("/logout", logout);
userRoute.post("/reset/:id", resetPassword);
module.exports = userRoute;
