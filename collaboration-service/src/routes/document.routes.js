const express = require("express")
const router = express.Router()

const controller = require("../controllers/document.controller")

router.post("/", controller.createDocument)

router.get("/:id", controller.getDocument)

router.put("/:id", controller.updateDocument)

module.exports = router