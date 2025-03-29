const express = require("express")
const URL = require("../models/url")

const router = express.Router()

router.get("/", async (req, res)=>{
    const allURLs = await URL.find()
    res.render('home', {
        allUrls: allURLs,
    })
})

module.exports = router