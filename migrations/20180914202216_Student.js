
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', function (t) {
        t.increments('id').unsigned().primary();
        t.string('usn', 20).notNull();
        t.float('cgpa').unsigned().default(0.0);
        t.integer('user_id').unsigned().nullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('students');
};
