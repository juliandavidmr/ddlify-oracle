import { IConnectionParams, IConnection } from './models/connection.model';
import { getConnection, closeConnection } from './connect';
import { executeQuery } from './execute';
import { hasArguments } from './utils/Arguments';
import * as Array from './utils/Array';
import * as Objects from './utils/Objects';
import * as oracledb from 'oracledb';

declare var Promise: any;

interface ITableParam {
  name: string
  owner: string
}

const COLUMNS: Array<string> = [
  "column_name",
  "data_type",
  "data_length",
  "data_precision",
  "data_scale",
  "nullable",
  "column_id",
  "default_length",
  "density",
  "char_length",
  "owner"
];

/**
 * 
 * @param table 
 * @param dbConfigs 
 * @param connection 
 */
export function describe(table: ITableParam | string, dbConfigs: IConnectionParams, connection: IConnection) {
  if (hasArguments(arguments)) {
    return Promise.reject("There are no established arguments. Please enter the necessary arguments.");
  }
  if (typeof table !== 'string' && typeof table !== 'object') {
    return Promise.reject("Invalid table name");
  }
  if (!dbConfigs && !connection) {
    return Promise.reject("Invalid params connection");
  }

  return new Promise((resolve, reject) => {
    let query = "";
    if (typeof table === 'object') {
      if (!!table.name && !!table.owner) {
        query = `SELECT ${COLUMNS.join(',')} FROM ALL_TAB_COLUMNS WHERE TABLE_NAME = '${table.name}' AND OWNER = '${table.owner}'`;
      }
    } else {
      query = `SELECT ${COLUMNS.join(',')} FROM ALL_TAB_COLUMNS WHERE TABLE_NAME = '${table}'`;
    }
    if (dbConfigs) {
      getConnection(dbConfigs).then((conn: IConnection) => {
        executeQuery(conn, query, [], {}).then(described => {
          return resolve(beautifyDescribed(described));
        }).catch(err => reject(err))
      });
    } else if (connection) {
      executeQuery(connection, query, [], {}).then(described => {
        return resolve(beautifyDescribed(described))
      }).catch(err => reject(err))
    }
  });
}

/**
 * Pone mas bonita la salida
 * @param array 
 */
function beautifyDescribed(array: Array<Array<string | number>>) {
  var _out = [];
  array.map((rows_tables) => {
    var obj = {}
    rows_tables.map((item, i) => {      
      obj[COLUMNS[i]] = item;
    });
    _out.push(obj);
  });
  return _out;
}