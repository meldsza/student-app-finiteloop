const knex = require('../lib/knex');
const bcrypt = require('bcrypt');
const secret = require('./../middleware/jwt').secret;
const jwt = require('jsonwebtoken')
module.exports = async function (req, res) {
    let user;
    if (req.body.username.includes("@")) {
        user = await knex('users').where('email', req.body.username).first();
    } else {
        user = await knex('users').where('username', req.body.username).first();
    }
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({ id: user.id }, secret);
        res.json({
            token: token
        });
    }
    else {
        res.json({
            error: "Invalid username/password"
        });
    }
}