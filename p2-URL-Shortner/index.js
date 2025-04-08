const express = require("express")
const path = require("path")
const connectMongoDB = require("./connection")

const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRoutes")
const  userRoute = require("./routes/user")

const app = express()
PORT = 8000

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectMongoDB("mongodb://localhost:27017/url-short")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use("/url", urlRoute)
app.use("/", staticRoute) 
app.use("/user", userRoute) 


app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`)
})