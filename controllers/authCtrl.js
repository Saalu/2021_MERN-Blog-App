const Users = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const userExist = await Users.findOne({ email: email });
      if (userExist)
        return res.status(400).json({ msg: "Email already exists" });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash,
      });

      await newUser.save();
      res.json({ msg: "Sign Up Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const user = await Users.findOne({ email: req.body.email });
      !user && res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      !isMatch && res.status(400).json({ msg: "Incorrect password." });

      //   // if login succceeds
      //   const payload = { id: user._id, name: user.username };
      //   const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      //     expiresIn: "1d",
      //   });
      // res.json({ token });

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  verifiedToken: async (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.send(false);

      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(false);

        const user = await Users.findById(verified.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
