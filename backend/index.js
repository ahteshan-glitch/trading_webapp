require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const bodyParser = require('body-parser')
const cors=require("cors")
const {holdingModel,orderModel,userModel,positionModel}=require("./models/model.js")
const PORT=process.env.PORT||5000;
const URL=process.env.MONGO_URL;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
app.post("/signup",async(req,res)=>{
    
   const {username,email,password}=req.body
   const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }


   bcrypt.hash(password, 10, async(err, hash)=>{
    if(err) console.log(err)
    const newuser=await userModel.create({
        username,email,password:hash
       })

    let token=jwt.sign({email},process.env.JWT_SECRET)
    res.cookie("token",token)
    return res.status(200).json({message:"created account successfully",token,redirectUrl: process.env.BACKEND_URL,})
   
       
});


  
   
   
  
    
})
app.post("/logout",(req,res)=>{
    res.cookie("token","")
})
app.post("/login",async(req,res)=>{
    let {username,password}=req.body;
    const user=await userModel.findOne({username})
    if(!user) return res.status(401).json({message:"something went wrong"})
    bcrypt.compare(password, user.password, function(err, result) {
       if(err) return res.status(500).json({ message: "something went wrong" });
       if (result) {
        let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        return res.status(200).json({
          
          token,
          redirectUrl: process.env.BACKEND_URL,
        });
      }
       else return res.status(403).json({ message: "Please recheck your credentials" });

    });
    
})

app.get("/",(req,res)=>{
    res.send("welcome to the backend")
})



app.listen(PORT,()=>{
    console.log("server online")
    mongoose.connect(URL)
    console.log("connected to database")
})
