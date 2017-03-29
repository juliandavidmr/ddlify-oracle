export interface IConnectionParams {
    user: string,

    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    // External Authentication.
    password: string,

    // For information on connection strings see:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    connectString: string,

    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
    externalAuth: boolean
}

export interface IConnection {
    oracleServerVersion: Number,
    action: null,
    module: null,
    clientId: null,
    stmtCacheSize: 30,
    setMaxListeners: Function,
    getMaxListeners: Function,
    emit: Function,
    addListener: Function,
    on: Function,
    prependListener: Function,
    once: Function,
    prependOnceListener: Function,
    removeListener: Function,
    removeAllListeners: Function,
    listeners: Function,
    listenerCount: Function,
    eventNames: Function,
    domain: any,
    _events: Object,
    _eventsCount: Number,
    _maxListeners: any,
    queryStream: Function,
    execute: Function,
    commit: Function,
    createLob: Function,
    rollback: Function,
    release: Function,
    close: Function,
    break: Function
}
