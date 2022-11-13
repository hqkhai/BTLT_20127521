const express = require('express')
const router = express.Router()
const userController = require("../app/controller/userController")
const verify = require("../middleware/verifyToken")

const verifyRoles =  require("../middleware/verifyRoles")
const ROLES_LIST = require("../config/allowedRoles")


//CREATE
router.post("/create", verifyRoles(ROLES_LIST.Admin), userController.createUser)

//UPDATE
router.put("/update/:id", verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), userController.updateUser)

//DELETE
router.delete("/:id", verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), userController.deleteUser)

//GET
router.get("/get/:id", verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), userController.getUser)

//GETALL
router.get("/get", verifyRoles(ROLES_LIST.Admin), userController.getAllUser)

//RESET PASSWORD
router.get("/reset-password/:id/:key", userController.resetPassword)

//VERIFY EMAIL
router.get("/verify/:id/:key", userController.verifyEmailUser)

//Default
router.get("/", userController.index)

module.exports = router