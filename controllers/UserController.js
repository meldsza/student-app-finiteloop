module.exports = function (req, res) {
    let user = await knex("users").where('id', req.params.id || req.user.id).select(['username', 'email', 'name', 'cgpa']).first();
    user.semesters = await knex("semesters").where('user_id', req.params.id || req.user.id);
    res.json(user);
}