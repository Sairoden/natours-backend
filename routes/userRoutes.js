const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

// Users
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

// Users ID
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
