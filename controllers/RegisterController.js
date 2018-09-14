const is_alphanum = /^[a-z0-9]+$/i;
const is_alpha = /^[a-z\ ]+$/i;
const is_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

const knex = require('../lib/knex');
const bcrypt = require('bcrypt');

module.exports = async function (req, res) {
    if (!is_alphanum.test(req.body.username))
        return res.json({ error: "Username is invalid" });
    else if (is_email.test(req.body.email))
        return res.json({ error: "Email is invalid" });
    else if (knex(users).where('username', req.body.username).count() > 0)
        return res.json({ error: "Username already in use" });
    else if (knex(users).where('email', req.body.email).count() > 0)
        return res.json({ error: "Email already registered" });
    knex('users').insert({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        email: req.body.email,
        name: req.body.name,
    });
    res.json({ success: "Account successfully created" });

}