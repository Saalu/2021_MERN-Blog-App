const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");

router
  .route("/")
  .get(categoryCtrl.getCategories)
  .post(categoryCtrl.createCategory);

// router
//   .route("/:id")
//   .get(categoryCtrl.getCategory)
//   .put(categoryCtrl.updateCategory)
//   .delete(categoryCtrl.deleteCategory);

module.exports = router;
