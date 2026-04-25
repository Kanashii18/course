module.exports = function(app){
     app.get("/publico",(req,res)=>{
          res.json({text:"este es publico, lo veremos todos"});
     })
}