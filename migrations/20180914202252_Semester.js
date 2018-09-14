
exports.up = function (knex, Promise) {
    return knex.schema.createTable('semesters', function (t) {
        t.increments('id').unsigned().primary();
        t.string('name', 30).notNull();
        t.float('sgpa').unsigned().default(0.0);
        t.integer('user_id').unsigned().nullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('semesters');
};
