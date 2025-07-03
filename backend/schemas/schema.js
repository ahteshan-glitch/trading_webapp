const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");
const holdingSchema=new Schema({
    name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
})
const orderSchema =new Schema({
      name: String,
      qty:Number,
      price: Number,
      mode: String,
})
const positionSchema=new Schema({
      product: String,
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss: Boolean,
})
const userSchema=new Schema({
      username:{
            type:String,
            required:true,
            unique: true
      },
      email:{
            type:String,
            required:true,
            unique: true
      },
      password:{
            type:String,
            required:true
      }
})



module.exports={holdingSchema,orderSchema,positionSchema,userSchema};