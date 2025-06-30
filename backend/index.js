require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const bodyParser = require('body-parser')
const cors=require("cors")
const {holdingModel,orderModel,positionModel}=require("./models/model.js")
const PORT=process.env.PORT||5000;
const URL=process.env.MONGO_URL;


app.use(bodyParser.json())
app.use(cors())
app.get("/allholdings",async(req,res)=>{
    let allholdings=await holdingModel.find({})
    res.send(allholdings)
})
app.get("/allpositions",async(req,res)=>{
    let allholdings=await positionModel.find({})
    res.send(allholdings)
})
app.post("/newOrder",async(req,res)=>{
    let newOrder=new orderModel({
        name: req.body.name,
        qty:req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    console.log(newOrder)
   await newOrder.save();
})

app.get("/",(req,res)=>{
    res.send("welcome to the backend")
})



app.listen(PORT,()=>{
    console.log("server online")
    mongoose.connect(URL)
    console.log("connected to database")
})
