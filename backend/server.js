const express=require("express")
const router=express.router
const app=express()
const connectToMongoDB=require('./dbConfig')
connectToMongoDB()
app.listen(5000,()=>{
    console.log("Server running at 5000")
})
