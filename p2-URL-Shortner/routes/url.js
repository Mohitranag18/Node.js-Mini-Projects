const express = require("express")
const router = express.Router()
const { createShortURL, redirectURL, analyticsURL } = require("../controllers/url")

router.post("/", createShortURL)
router.get("/:shortId", redirectURL)
router.get("/analytics/:shortId", analyticsURL)

module.exports = router