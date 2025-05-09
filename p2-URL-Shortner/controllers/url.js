const URL = require("../models/url")
const shortid = require('shortid')

async function createShortURL(req, res){
    const body = req.body
    if(!body.url) return res.status(400).json({msg: "url is required"})
    const shortId = shortid.generate()
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    })
    return res.render('home',{
        id: shortId,
    })
}

async function redirectURL(req, res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    })
    res.redirect(entry.redirectURL)
}

async function analyticsURL(req, res){
    const shortId = req.params.shortId
    const result = await URL.findOne({
        shortId
    })
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}

module.exports = {
    createShortURL,
    redirectURL,
    analyticsURL
}