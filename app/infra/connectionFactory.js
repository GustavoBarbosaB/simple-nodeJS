var mysql = require(`mysql`);

function createDBConnection(){
  return mysql.createConnection({
      host:`localhost`,
      port:`3306`,
      user:`root`,
      password:`root`,
      database:`casaCodigo`
    });
}

module.exports = function(){
  return createDBConnection;
}
