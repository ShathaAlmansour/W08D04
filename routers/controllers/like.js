const likeModel = require("../../db/models/like");
const postmodel = require("../../db/models/post");

const newLike = (req, res) => {
  const { id } = req.params;
  likeModel
    .findOne({ user: req.user._id, post: id })
    .then((found) => {
      if (found) {
        likeModel
          .findOneAndDelete({ user: req.user._id, post: id })
          .then((data) => {
            postmodel
              .findByIdAndUpdate(id, { $pull: { like: data._id } })
              .then((result) => {
                res.status(201).json({ result: "removeLike" });
              })
              .catch((err) => {
                res.status(400).json(err);
              });
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      } else {
        const newLike = new likeModel({
          like: true,
          user: req.user._id,
          post: id,
        });
        newLike.save().then((result) => {
          postmodel
            .findByIdAndUpdate(id, { $push: { like: result._id } })
            .then((result) => {
              console.log(result);
            });
          res.status(201).json({ result: "newLike" });
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { newLike };
