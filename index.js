const express=require("express")
const app =express();
const route=require("./src/routes/soma.route")
const PORTA=30001;
const database=require("./src/database/db")
// app.get("/",(req,res)=>{
//     res.send("ola mudo")
// })
app.get("/",route)
// routes(app)
app.listen(PORTA,()=>{
    console.log("lendo")
    database()
})