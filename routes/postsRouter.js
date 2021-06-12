const postCtrl = require("../controllers/postCtrl");

const router = require("express").Router();

router.route("/").get(postCtrl.getPosts);

router
  .route("/:id")
  .get(postCtrl.getPost)
  .post(postCtrl.createPosts)
  .put(postCtrl.updatePost)
  .delete(postCtrl.deletePost);

module.exports = router;
