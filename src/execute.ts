import { IConnectionParams, IConnection } from './interfaces/connection.model';
import { toObject, existValue } from './utils/Array';
import * as Connect from './connect';
import * as oracledb from 'oracledb';
import * as isNumber from 'is-number';

declare var Promise: any;

/**
 * 
 * @param connection 
 * @param query 
 * @param params 
 */
export function executeQuery(connection: IConnection, query: string, params?: Array<string | number>, options?: any): Promise<any> {
  //console.log("executeQuery>", arguments)
  if (!connection) {
    return Promise.reject("Invalid connection param")
  }
  return new Promise((resolve, reject) => {
    connection.execute(
      query, params,
      options || {
        outFormat: oracledb.OBJECT,
        extendedMetaData: true
      },
      function (err, result) {
        if (err) {
          //console.error(err.message);
          return reject(err);
        }
        //console.log(result.rows);
        return resolve(result.rows);
      });
  });
}