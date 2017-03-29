# Ddlify: Oracle database bindings for Node.js #

## Features

- [x] Promises
- [x] All version information
- [x] Connect
- [ ] DDL
- [ ] Describe procedures
- [x] Describe tables
- [ ] Describe views
- [ ] Describe secuences
- [ ] Describe triggers
- [ ] Describe procedures

## Installation

**[IMPORTANT] First step, it is important to follow the installation guide before continuing. [Installation guide](./docs/INSTALLATION.md)**

```sh
# Not available yet
$ npm install --save ddlify
```

## API

### Connect database
Connect to a local or remote database.

```js
var ddlify = require('ddlify');


var dbConfig = {
    user: process.env.NODE_ORACLEDB_USER || "hr",

    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    // External Authentication.
    password: process.env.NODE_ORACLEDB_PASSWORD || "welcome",

    // For information on connection strings see:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",

    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

ddlify.getConnection(dbConfig).then(connection => {
    console.log("Connection:\n", connection)
});
```
### Get oracle information ##
```js
ddlify.info(dbConfig).then(info => {
    console.log("Info:\n", info);
    /*=>
    Info:
    ['Oracle Database 12c Enterprise Edition Release 12.1.0.2.0 - 64bit   Production',
     'PL/SQL Release 12.1.0.2.0 - Production',
     'CORE 12.1.0.2.0 Production',
     'TNS for 64-bit Windows: Version 12.1.0.2.0 - Production',
     'NLSRTL Version 12.1.0.2.0 - Production' ]
    */
});
```

### Describe table
```js
var table = {
  name: 'USUARIO',
  owner: 'VISIBILIDAD'
}

ddlify.describe(table, dbConfig).then(info => {
  console.log(info)
});
```


## Contributing

Ddlify-oracle is an open source project. See [CONTRIBUTING](./docs/CONTRIBUTING.md) for details.


## LICENSE ##

This module is released under the [MIT License] [license]. [**@juliandavidmr**](https://github.com/juliandavidmr)

[license]: http://www.opensource.org/licenses/mit-license.php
[oci]: http://www.oracle.com/technetwork/database/features/oci/index.html
[oci-lib]: http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html
[oci-inc]: http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html