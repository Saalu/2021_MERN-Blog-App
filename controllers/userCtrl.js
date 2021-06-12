const Users = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const userCtrl = {
  updateUser: async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await Users.findOneAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.json(updatedUser);
        // res.json({msg: 'Updated Successfully'})
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
    } else {
      res.status(401).json({ msg: "You can update only your account" });
    }
  },

  deleteUser: async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {
        const user = await Users.findById(req.params.id);
        try {
          await Post.deleteMany({ username: user.username });
          await Users.findByIdAndDelete(req.params.id);
          res.status(200).json({ msg: "User has been deleted..." });
        } catch (err) {
          res.status(500).json({ msg: err.message });
        }
      } catch (err) {
        res.status(404).json({ msg: "User not found!" });
      }
    } else {
      res.status(401).json({ msg: "You can update only your account!" });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
