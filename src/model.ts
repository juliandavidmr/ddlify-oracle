import { IConnection, IConnectionParams } from './interfaces/connection.model';
import * as sworm from 'sworm';

export class Model {
  constructor(attrs) {
    console.log("Attr:", attrs)
  }

  public connect(connection: IConnection) {

  }
}