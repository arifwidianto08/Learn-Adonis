'use strict';

const Env = use('Env');

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
  connection: Env.get('DB_CONNECTION', 'mongodb'),

  /*
  |--------------------------------------------------------------------------
  | mongodb
  |--------------------------------------------------------------------------
  |
  */
  mongodb: {
    client: 'mongodb',
    connectionString: Env.get(
      'DB_CONNECTION_STRING',
      'mongodb://expoabsensi:expoabsensi123@cluster0-shard-00-00-shxe2.mongodb.net:27017,cluster0-shard-00-01-shxe2.mongodb.net:27017,cluster0-shard-00-02-shxe2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    ),
    connection: {
      host: Env.get('DB_HOST', '0.0.0.0'),
      port: Env.get('DB_PORT', 27017),
      username: Env.get('DB_USER', 'expoabsensi'),
      password: Env.get('DB_PASSWORD', 'expoabsensi123'),
      database: Env.get('DB_DATABASE', 'test'),
      options: {
        // replicaSet: Env.get('DB_REPLICA_SET', '')
        // ssl: ('DB_SSL, '')
        // connectTimeoutMS: Env.get('DB_CONNECT_TIMEOUT_MS', 15000),
        // socketTimeoutMS: Env.get('DB_SOCKET_TIMEOUT_MS', 180000),
        // w: ('DB_W, 0),
        // readPreference: Env.get('DB_READ_PREFERENCE', 'secondary'),
        // authSource: Env.get('DB_AUTH_SOURCE', ''),
        // authMechanism: Env.get('DB_AUTH_MECHANISM', ''),
        // other options
      }
    }
  }
};
