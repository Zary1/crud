const express = require("express")
const controllerSoma=require("../controller/soma.controller")
const routes= express()
routes.get("/",controllerSoma.soma)

module.exports=routes