const {model}=require("mongoose");

const {OrderSchema}=require("../schemas/OrderSchema");

const OrdersModel=model("order",OrderSchema);

module.exports=OrdersModel;