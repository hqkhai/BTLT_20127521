const express = require('express')
const router = express.Router()
const roomController = require("../app/controller/roomController")
const verify = require("../middleware/verifyToken")

const verifyRoles =  require("../middleware/verifyRoles")
const ROLES_LIST = require("../config/allowedRoles")

//CREATE
router.post("/create/:HotelId", roomController.createRoom)

//UPDATE
router.put("/update/:id", verifyRoles(ROLES_LIST.Admin), roomController.updateRoom)

//DELETE
router.delete("/:id/:HotelId", verifyRoles(ROLES_LIST.Admin), roomController.deleteRoom)

//GET
router.get("/get/:id", roomController.getRoom)

//GETALL
router.get("/get", roomController.getAllRoom)

router.get("/", roomController.index)

module.exports = router
