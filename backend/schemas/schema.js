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
      email:{
            type:String,
            required:true,
            unique:true
      },
      username:{
            type:String,
            required:true,
            unique:true
      },
      password:{
            type:String,
            required:true,
            unique:true
      },
      createdAt: {
            type: Date,
            default: new Date(),
      },
})
userSchema.pre("save", async function () {
      this.password = await bcrypt.hash(this.password, 12);
    });


module.exports={holdingSchema,orderSchema,positionSchema,userSchema};