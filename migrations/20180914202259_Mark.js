
exports.up = function (knex, Promise) {
    return knex.schema.createTable('marks', function (t) {
        t.increments('id').unsigned().primary();
        t.string('subject').notNull();
        t.integer('semester_id').unsigned().notNull();
        t.float('task1').unsigned().nullable();
        t.float('task2').unsigned().nullable();
        t.float('task3').unsigned().nullable();
        t.float('mse1').unsigned().nullable();
        t.float('mse2').unsigned().nullable();
        t.float('see').unsigned().nullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('marks');
};
