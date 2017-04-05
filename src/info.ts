import { IConnectionParams, IConnection } from './interfaces/connection.model';
import { toObject, existValue } from './utils/Array';
import * as Connect from './connect';
import * as oracledb from 'oracledb';
import * as isNumber from 'is-number';

declare var Promise: any;

function getInfo(connection: IConnection): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.execute(
      "SELECT * FROM v$version", [],
      {
        outFormat: oracledb.OBJECT,
        extendedMetaData: true
      },
      function (err, result) {
        if (err) {
          //console.error(err.message);
          return reject(err);
        }
        //console.log(result.rows);
        return resolve(beautifyInfo(toObject(result.rows)));
      });
  });
}


/**
 * 
 * @param table  name table
 */
export function info(dbConfigs: IConnectionParams): Promise<any> {
  return new Promise((resolve, reject) => {
    Connect.getConnection(dbConfigs).then(connection => {
      getInfo(connection).then(info => resolve(info)).catch(err => reject(err))
    })
  });
}

function beautifyInfo(infoObject: Object): any {
  var obj = [];
  for (var key in infoObject) {
    if (infoObject.hasOwnProperty(key)) {
      var element = infoObject[key];
      if (isNumber(key)) {
        for (var key2 in element) {
          if (element.hasOwnProperty(key2)) {
            var element2 = element[key2];
            if (!existValue(obj, element["BANNER"])) {
              obj.push(element["BANNER"])
            }
          }
        }
      }
    }
  }
  return obj;
}