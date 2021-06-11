const userCtrl = require("../controllers/userCtrl");
const router = require("express").Router();

router.route("/:id").put(userCtrl.updateUser);
//   .get(userCtrl.getUser)
//   .delete(userCtrl.deleteUser);

module.exports = router;
