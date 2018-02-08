module.exports = function(app){
  app.get('/produtos',function(request,response){

    var connection = app.infra.connectionFactory();

    connection.query(`SELECT * FROM livros`,function(error,results){
    response.send(results);

    });
    connection.end();
  });
};
