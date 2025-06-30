const {model}= require("mongoose");
const {holdingSchema,orderSchema,positionSchema,userSchema} =require("../schemas/schema.js");
const holdingModel=new model("holding",holdingSchema);
const orderModel=new model("order",orderSchema);
const positionModel=new model("position",positionSchema)
const userModel=new model("user",userSchema)
module.exports={holdingModel,orderModel,positionModel,userModel};