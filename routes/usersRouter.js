const userCtrl = require("../controllers/userCtrl");
const router = require("express").Router();

router
  .route("/:id")
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser)
  .get(userCtrl.getUser);

module.exports = router;
