const express = require("express")
const { connectMongoDB } = require("./connection")

const userRouter = require("./routes/user") 

const app = express()
PORT = 8000

// Middleware
app.use(express.json());

// MongoDB Connection
connectMongoDB("mongodb://localhost:27017/userDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// Main app routes
app.use("/users", userRouter)

app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`)
})