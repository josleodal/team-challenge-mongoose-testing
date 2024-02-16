const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

//Post.js // Aqui ira el modelo de la publicación con los campos title, body y los timestamps.
