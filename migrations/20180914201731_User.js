
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name', 50).notNull();
        t.string('username', 50).notNull();
        t.string('email', 50).notNull();
        t.float('cgpa').unsigned().default(0.0);
        t.string('password').notNull();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
