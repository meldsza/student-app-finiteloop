
exports.up = function (knex, Promise) {
    return knex.schema.createTable('semesters', function (t) {
        t.increments('id').unsigned().primary();
        t.float('sgpa').unsigned().default(0.0);
        t.integer('student_id').unsigned().nullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('semesters');
};
