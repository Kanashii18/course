const otro = require("./otro.js");
const publico = require("./publico.js");
const express = require("express");

const app = express();

app.get("/text",(req,res)=>{
     res.json({text:"ok, es un texto"});
})

otro(app);
publico(app);

app.listen(3080,"127.0.0.1",()=>{
     console.log("escuchando");
});