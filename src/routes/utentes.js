const router= require("express").Router()
const user=require("../modelos/User")

router.post("add",async(req,res)=>{
    const{nome,idade}=req.body
    const a = new user({
        nome,
        idade
    })
    try{
        if(!nome|| !idade){
          return  res.status(400).json({message:"ok"})
        }
              // Salve o documento no banco de dados
              await a.save();
              res.status(200).json({ message: 'added' });

    }catch(err) {
        console.log("erro ao inserir",err);
    }

})