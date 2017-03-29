import { IConnectionParams, IConnection } from './models/connection.model';
import * as Connect from './connect';
import * as oracledb from 'oracledb';

declare var Promise: any;

function getInfo(connection: IConnection):Promise<any> {
  return new Promise((resolve, reject) => {
    connection.execute(
      "SELECT * FROM v$version", [],
      {
        fetchInfo:
        {
          "HIRE_DATE": { type: oracledb.STRING },  // return the date as a string
          "COMMISSION_PCT": { type: oracledb.DEFAULT }  // override oracledb.fetchAsString
        }
      },
      function (err, result) {
        if (err) {
          //console.error(err.message);
          //doRelease(connection);
          return reject(err);
        }
        //console.log(result.rows);
        return resolve(result.rows);
        //doRelease(connection);
      });
  });
}


/**
 * 
 * @param table  name table
 */
export function info(dbConfigs: IConnectionParams):Promise<any> {
  return new Promise((resolve, reject) => {    
    Connect.getConnection(dbConfigs).then(connection => {
      getInfo(connection).then(info => resolve(info)).catch(err => reject(err))
    })
  });
}