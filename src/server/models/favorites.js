const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikesSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  colors: { type: mongoose.Schema.Types.ObjectId, ref: "colors" },
  palletes: {
    type: mongoose.Schema.Typer.ObjectId,
    ref: "palletes"
  }
});

const Likes = mongosee.model('likes', LikesSchema);

module.exports = Likes;