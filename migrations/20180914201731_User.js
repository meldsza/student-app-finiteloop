
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('email').notNull();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};