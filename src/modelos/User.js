const mongoose=require("mongoose")

const UserShema= new mongoose.Schema({

    nome:String,
    idade:Number

})
const User=mongoose.Schema("user",UserShema)


exports.module=User