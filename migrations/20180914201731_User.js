
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name', 50).notNull();
        t.string('email', 50).notNull();
        t.string('password').notNull();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
