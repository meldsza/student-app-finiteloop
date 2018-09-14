// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: "127.0.0.1",
      database: "studentapp_api"
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL || process.env.CLEARDB_DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
