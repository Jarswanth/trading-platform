const {model}=require("mongoose");

const {UserSchema}=require("../schemas/UserSchema");

const UsersModel=model("user",UserSchema);

module.exports=UsersModel;