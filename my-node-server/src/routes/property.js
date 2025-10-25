const express = require("express");
const { createProperty,getProperties, getProperty, deleteProperty, updateProperty } = require("../controllers/property")
const router = express.Router()

router.post("/", createProperty);
router.get("/", getProperties)
router.get("/:id", getProperty);
router.delete("/:id", deleteProperty)
router.put("/:id", updateProperty)

module.exports = router