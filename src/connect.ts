import { IConnection } from './models/connection.model';
declare var process: any;

import * as oracledb from 'oracledb';

export function Connect(dbConfig: IConnection) {
  oracledb.getConnection(
    {
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString
    },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Connection was successful!');

      connection.close(
        function (err) {
          if (err) {
            console.error(err.message);
            return;
          }
        });
    });
}