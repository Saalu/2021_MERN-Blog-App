const Users = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { post } = require("../routes/authRouter");

const postCtrl = {
  getPosts: async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.json(posts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createPosts: async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedUser = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );

          res.status(200).json(updatedUser);
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      } else {
        res.status(401).json({ msg: "You can update only your post" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json({ msg: "Post has been deleted..." });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      } else {
        res.status(401).json({ msg: "You can delete only your post" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
