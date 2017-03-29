/**
 * Count the number of arguments
 * @param params 
 */
export function count(params:any) {
    return (typeof params === 'object')? Object.keys(params): 0;
}

/**
 * True: if has arguments
 * @param params 
 */
export function hasArguments(params:any):Boolean {
    return count(params) > 0;
}