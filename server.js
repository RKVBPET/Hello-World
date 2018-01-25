var express=require("express");
var app=express();

var port=3000;

app.listen(port,function(req,res){
    console.log("server listening on port..",port);
});

app.get('/',function(req,res){
    res.send("hello world");
})