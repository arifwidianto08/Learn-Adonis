'use strict';

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with databases.
  |
  */
  connection: 'mongodb',

  /*
  |--------------------------------------------------------------------------
  | mongodb
  |--------------------------------------------------------------------------
  |
  */
  mongodb: {
    client: 'mongodb',
    connectionString:
      'mongodb://expoabsensi:expoabsensi123@cluster0-shard-00-00-shxe2.mongodb.net:27017,cluster0-shard-00-01-shxe2.mongodb.net:27017,cluster0-shard-00-02-shxe2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    connection: {
      host: '0.0.0.0',
      port: 27017,
      username: 'expoabsensi',
      password: 'expoabsensi123',
      database: 'test'
    }
  }
};
