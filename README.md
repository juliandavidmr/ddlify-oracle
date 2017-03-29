# Ddlify: Oracle database bindings for Node.js #

## Features

- [x] Promises
- [x] All version information
- [x] Connect
- [ ] DDL
- [ ] Describe procedures
- [ ] Describe tables
- [ ] Describe views
- [ ] Describe secuences
- [ ] Describe triggers
- [ ] Describe procedures

## INSTALL

### OCI libraries ###

Before proceeding with installation, you need to have the 
[OCI instant client] [oci] [libraries] [oci-lib] and [include files] [oci-inc].
For example, you download the `instantclient-basic-linux.x64-11.2.0.3.0.zip` 
library file, and the `instantclient-sdk-linux.x64-11.2.0.3.0.zip` SDK file, and save them in your `$HOME/Downloads` directory. You would then uncompress both files, and move the generated directory to your `/opt` path:

```bash
$ cd $HOME/Downloads
$ unzip instantclient-basic-linux.x64-11.2.0.3.0.zip
$ unzip instantclient-sdk-linux.x64-11.2.0.3.0.zip 
$ sudo mv instantclient_11_2/ /opt/instantclient
```

After uncompressing you will probably need to create symbolink links:

```bash
$ cd /opt/instantclient
$ sudo ln -s libocci.so.11.1 libocci.so
$ sudo ln -s libclntsh.so.11.1 libclntsh.so
```

You will also need `libaio`. In **Arch Linux** this can easily be installed with:

```bash
$ sudo pacman -S libaio
```

On **Debian** based distros:

```bash
$ sudo apt-get install libaio
```

### Configuring OCI ###

Once you have the library and include files installed, and in order for the 
installation script to locate them properly, you'll need to set the 
`OCI_INCLUDE_DIR` and `OCI_LIB_DIR` environment variables. For example:

```bash
$ export OCI_INCLUDE_DIR=/opt/instantclient/sdk/include/
$ export OCI_LIB_DIR=/opt/instantclient
```
Or
```bash
$ export OCI_INC_DIR=/opt/instantclient/sdk/include/
$ export OCI_LIB_DIR=/opt/instantclient
```

## Continue installation

Once the environment variables are set, install with npm:

```bash
$ npm install db-oracle
```

You should also add the OCI library path to your `LD_LIBRARY_PATH` environment:

```bash
$ export LD_LIBRARY_PATH=/opt/instantclient

$ sudo apt-get install libaio1
```

--------

## Installation 
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
### Get oracle information
```js
ddlify.info(dbConfig).then(info => {
    console.log("Info:\n", info);
    /*=>
Info:
 [ 'Oracle Database 12c Enterprise Edition Release 12.1.0.2.0 - 64bit Production',
  'PL/SQL Release 12.1.0.2.0 - Production',
  'CORE\t12.1.0.2.0\tProduction',
  'TNS for 64-bit Windows: Version 12.1.0.2.0 - Production',
  'NLSRTL Version 12.1.0.2.0 - Production' ]
    */
}).catch(err => {
    console.log("ERROR:\n", err)
});
```


## COLABORATE

Install packages:
```bash
$ yarn add global gulp-cli
$ yarn install
```

Run
```bash
$ [sudo] gulp
$ node dist/main.js
```




## LICENSE ##

This module is released under the [MIT License] [license].

[license]: http://www.opensource.org/licenses/mit-license.php
[oci]: http://www.oracle.com/technetwork/database/features/oci/index.html
[oci-lib]: http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html
[oci-inc]: http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html