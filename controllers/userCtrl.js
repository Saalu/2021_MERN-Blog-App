const Users = require("../models/User");
const bcrypt = require("bcrypt");

const userCtrl = {
  updateUser: async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const { username, email, profilePic } = req.body;
        const updatedUser = await Users.findOneAndUpdate(
          { _id: req.params.id },
          {
            username,
            email,
            profilePic,
          }
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
};

module.exports = userCtrl;
