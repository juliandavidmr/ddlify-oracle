import { IConnectionParams, IConnection } from './interfaces/connection.model';
declare var Promise: any;

import * as oracledb from 'oracledb';

/**
 * Get connection Oracle
 * @param dbConfig 
 */
export function getConnection(dbConfig: IConnectionParams): Promise<IConnection> {
  return oracledb.getConnection(
    {
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString
    });
}

/**
 * Close connection connection
 * @param Connection 
 */
export function closeConnection(Connection: IConnection) {
  if (!('close' in Connection)) {
    throw new Error("Connection invalid");
  }
  Connection.close();
}