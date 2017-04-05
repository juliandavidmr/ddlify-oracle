var ddlify = require('../');

require('dotenv').config()

var dbConfig = {
  user: process.env.NODE_ORACLEDB_USER || "hr",
  password: process.env.NODE_ORACLEDB_PASSWORD || "welcome",
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

var Person = new ddlify.Model({
  name: {
    type: 'string'
  }
});