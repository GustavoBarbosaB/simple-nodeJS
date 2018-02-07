module.exports = function(app){
  app.get('/produtos',function(request,response){
    var mysql = require(`mysql`);
    var connection = mysql.createConnection({
      host:`localhost`,
      user:`root`,
      password:`root`,
      database:`casaCodigo`
    });

    connection.query(`SELECT * FROM livros`,function(error,results){
      response.setHeader("Content-Type", "application/json");
      response.send(results);
    });

    //response.render("produtos/lista");
    requestURL(`/produtos`);
    connection.end();
  });
}

function requestURL(endpoint){
  console.log("request in:"+endpoint);
}
