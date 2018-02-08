function Livros(connection){
  this._connection = connection;
}
Livros.prototype.lista = function(callback){
    this._connection.query('SELECT * FROM livros',callback);
}
module.exports = function(connection){
  return Livros;
}
