const authCtrl = require("../controllers/authCtrl");

const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("Hi, checking my skill set...");
});

router.post("/register", authCtrl.register);

router.post("/login", authCtrl.login);

// router.get('/verify',userCtrl.verifiedToken)

module.exports = router;
