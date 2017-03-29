/**
 * Convert Array to Object
 * @param array 
 */
export function toObject(array: Array<any>) {
  var obj = {};
  for (var key in array) {
    if (array.hasOwnProperty(key)) {
      obj[key] = array[key]
    }
  }
  return obj;
}

export function existValue(array:Array<any>, value:string):Boolean {
  return array.indexOf(value) !== -1
}