import { IConnectionParams, IConnection } from './models/connection.model';
import { getConnection, closeConnection } from './connect';
import { executeQuery } from './execute';
import { hasArguments } from './utils/Arguments';
import * as Array from './utils/Array';
import * as oracledb from 'oracledb';

declare var Promise: any;

/**
 * 
 * @param table 
 * @param dbConfigs 
 * @param connection 
 */
export function describe(table: string, dbConfigs: IConnectionParams, connection: IConnection) {
  if (hasArguments(arguments)) {
    return Promise.reject("There are no established arguments. Please enter the necessary arguments.");
  }
  if (typeof table !== 'string') {
    return Promise.reject("Invalid table name");
  }
  if (!dbConfigs && !connection) {
    return Promise.reject("Invalid params connection");
  }

  return new Promise((resolve, reject) => {
    let query = `SELECT column_name, data_type, data_length, data_precision FROM ALL_TAB_COLUMNS
                  WHERE TABLE_NAME = '${table}' AND OWNER = 'VISIBILIDAD'`;
    // let query = "BEGIN lobs_out(:id, :c, :b); END;"
    if (dbConfigs) {
      getConnection(dbConfigs).then(conn => {
        executeQuery(conn, query, [], {}).then(described => {
          return resolve(Array.toObject(described[0]));
        }).catch(err => reject(err))
      });
    } else if (connection) {
      executeQuery(connection, query, [], {}).then(described => resolve(described)).catch(err => reject(err))
    }
  });
}