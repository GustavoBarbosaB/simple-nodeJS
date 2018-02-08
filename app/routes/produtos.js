var dbConnection = require(`../infra/connectionFactory`);

module.exports = function(app){
  app.get('/produtos',function(request,response){
    var connection = dbConnection();

    connection.query(`SELECT * FROM livros`,function(error,results){
    response.setHeader("Content-Type", "application/json");
    response.send(results);
    });

    //response.render("produtos/lista");
    connection.end();
  });
}
