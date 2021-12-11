const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

const db = require("./db/index");

const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

app.use(express.json());
app.use(cors());
require("./config/passport")(passport);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use(express.urlencoded({ extended: false }));

const roleRouter = require("./routers/routes/role");
const userRoute = require("./routers/routes/user");
const postsRouter = require("./routers/routes/post");
const likeRouter = require("./routers/routes/like");
const commentRouter = require("./routers/routes/comment");

app.use(roleRouter);
app.use(commentRouter);
app.use(userRoute);
app.use(postsRouter);
app.use(likeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
