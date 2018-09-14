// Update with your config settings.

module.exports = {

  client: 'mysql2',
  connection: process.env.DATABASE_URL || process.env.CLEARDB_DATABASE_URL || {
    host: "127.0.0.1",
    database: "studentapp_api"
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
