module.exports = function(app){
  app.get(`/`,function(request,response){

    var connection = app.infra.connectionFactory();
    var produtosDao = new app.infra.LivrosDAO(connection);

    produtosDao.lista(function(error,results){
      response.send(results);
    });

    connection.end();
  });

  app.post(`/message`,function(request,response){
     var post = request.body;
     io.emit(`newMessage`,post);
     response.send(post);
  });
}
