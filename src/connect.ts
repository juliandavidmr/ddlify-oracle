import { IConnectionParams, IConnection } from './models/connection.model';
declare var Promise: any;

import * as oracledb from 'oracledb';

export function getConnection(dbConfig: IConnectionParams): Promise<IConnection> {
  return oracledb.getConnection(
    {
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString
    });
}

export function closeConnection(Connection: IConnection) {
  if (!('close' in Connection)) {
    throw new Error("Connection invalid");
  }
  Connection.close();
}