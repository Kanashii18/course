module.exports = function(app){
     app.get("/otro",(req,res)=>{
          res.json({text:"este no es mio! chuchu"});
     })
}