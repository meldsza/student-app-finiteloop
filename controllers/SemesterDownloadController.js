const knex = require('../lib/knex');
module.exports = async function (req, res) {
    let semester = await knex("semesters").where('id', req.params.id).first();
    semester.marks = await knex("marks").where('semester_id', req.params.id).first();

}