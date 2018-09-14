module.exports = function (req, res) {
    let user = knex("users").where('id', req.params.id || req.user.id).select(['username', 'email', 'name', 'cgpa']).first();
    user.semesters = knex("semesters").where('user_id', req.params.id || req.user.id);
    res.json(user);
}