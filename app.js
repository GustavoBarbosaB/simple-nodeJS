var express = require('express');
var app = express();

app.get('/produtos',function(request,response){
  response.send("Seu JSON esta aqui!");
});

app.listen(8080,function(){
  console.log("Servidor funcionando!");
});
