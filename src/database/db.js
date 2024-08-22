const mongoose=require("mongoose")
require("dotenv").config();


const db= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo conectado");



       

    }
 catch(err){
    console.log("Erro ao connectar",err);
 }

}

module.exports=db