var ddlify = require('../');

require('dotenv').config()

var dbConfig = {
  user: process.env.NODE_ORACLEDB_USER || "hr",
  password: process.env.NODE_ORACLEDB_PASSWORD || "welcome",
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

var table = {
  name: 'USUARIO',
  owner: 'VISIBILIDAD'
}

ddlify.describe(table, dbConfig).then(info => {
  console.log("Describe:\n", info)
}).catch(err => {
  console.log("ERROR:\n", err)
});