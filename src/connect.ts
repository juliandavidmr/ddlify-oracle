import { IConnectionParams, IConnection } from './models/connection.model';
declare var process: any;
declare var Promise: any;

import * as oracledb from 'oracledb';

function Connect(dbConfig: IConnectionParams): Promise<IConnection> {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(
      {
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
      },
      function (err, connection) {
        if (err) {
          console.error(err.message);
          return reject(err);
        }

        return resolve(connection)
        /*
        console.log('Connection was successful!');

        connection.close(
          function (err) {
            if (err) {              
              console.error(err.message);
              return reject(err);
            }
          });
        */
      });
  })
}

export function getConnection(dbConfig: IConnectionParams) {
  return Connect(dbConfig);
}

export function closeConnection(Connection: IConnection) {
  Connection.close();
}