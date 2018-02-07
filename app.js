var app = require(`./config/express`)();

var rotasProdutos = require(`./app/routes/produtos`)(app);

app.listen(8080,function(){
  console.log("Servidor funcionando!");
});
