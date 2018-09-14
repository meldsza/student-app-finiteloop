const knex = require('../lib/knex');
module.exports = async function (req, res) {
    let semester;
    switch (req.method.toLowerCase()) {
        case "get":
            semester = await knex("semesters").where('id', req.params.id).first();
            semester.marks = await knex("marks").where('semester_id', req.params.id).first();
            return res.json(semester);
        case "post":
            semester = await knex("semesters").where('id', req.params.id).first();
            req.body.marks.map(marks => {
                if (marks.id)
                    await knex("marks").where('id', marks.id).update(marks)
                else
                    await knex("marks").insert(marks)
            });
            semester.marks = await knex("marks").where('semester_id', req.params.id).first();
            return res.json(semester);
        case "put":
            semester = await knex("semesters").insert({ name: req.body.name }).returning('id');
            return res.json({ id: semester });
    }
}