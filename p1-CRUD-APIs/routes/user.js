const express = require("express")
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require("../controllers/user")

const router = express.Router()

router.route("/").get(getAllUsers).post(createUser) // get all users and create new user
router.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById) // Get User by ID, update user by id, delete user by id

module.exports = router;